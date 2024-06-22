import os
from flask import Flask, request, jsonify
import cv2
import numpy as np
import tensorflow as tf
from tensorflow import keras
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the pre-trained model
model = tf.keras.models.load_model('the_model.keras')  # Adjust the model path as needed

# Define constants
IMG_SIZE = 224
MAX_SEQ_LENGTH = 20
NUM_FEATURES = 2048

# Crop center square function
def crop_center_square(frame):
    y, x = frame.shape[0:2]
    min_dim = min(y, x)
    start_x = (x // 2) - (min_dim // 2)
    start_y = (y // 2) - (min_dim // 2)
    return frame[start_y:start_y + min_dim, start_x:start_x + min_dim]

# Load video function
def load_video(video_path, max_frames=0, resize=(IMG_SIZE, IMG_SIZE)):
    cap = cv2.VideoCapture(video_path)
    frames = []
    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            frame = crop_center_square(frame)
            frame = cv2.resize(frame, resize)
            frame = frame[:, :, [2, 1, 0]]  # BGR to RGB
            frames.append(frame)
            if len(frames) == max_frames:
                break
    finally:
        cap.release()
    return np.array(frames)

# Feature extractor
def build_feature_extractor():
    feature_extractor = keras.applications.InceptionV3(
        weights="imagenet",
        include_top=False,
        pooling="avg",
        input_shape=(IMG_SIZE, IMG_SIZE, 3),
    )
    preprocess_input = keras.applications.inception_v3.preprocess_input
    inputs = keras.Input((IMG_SIZE, IMG_SIZE, 3))
    preprocessed = preprocess_input(inputs)
    outputs = feature_extractor(preprocessed)
    return keras.Model(inputs, outputs, name="feature_extractor")

feature_extractor = build_feature_extractor()

# Prepare single video function
def prepare_single_video(frames):
    frames = frames[None, ...]
    frame_mask = np.zeros(shape=(1, MAX_SEQ_LENGTH,), dtype="bool")
    frame_features = np.zeros(shape=(1, MAX_SEQ_LENGTH, NUM_FEATURES), dtype="float32")
    for i, batch in enumerate(frames):
        video_length = batch.shape[0]
        length = min(MAX_SEQ_LENGTH, video_length)
        for j in range(length):
            frame_features[i, j, :] = feature_extractor.predict(batch[None, j, :])
        frame_mask[i, :length] = 1
    return frame_features, frame_mask

# Sequence prediction function
def sequence_prediction(video_path):
    frames = load_video(video_path)
    frame_features, frame_mask = prepare_single_video(frames)
    prediction = model.predict([frame_features, frame_mask])[0]
    prediction_value = float(prediction[0])  # Access the first element of the prediction array
    parameters = {
        'prediction': prediction_value,
        'video_length': len(frames),
        # Add more parameters here as needed
    }
    return prediction_value, parameters

@app.route('/')
def home():
    return "Deepfake Detection API"

@app.route('/detect', methods=['POST'])
def detect():
    if 'video' not in request.files:
        return jsonify({'error': 'No video file uploaded'}), 400
    video = request.files['video']
    if video.filename == '':
        return jsonify({'error': 'No selected video'}), 400
    video_path = os.path.join('uploads', video.filename)
    video.save(video_path)
    
    # Processing video and showing loading message
    print("Processing video...")

    prediction, parameters = sequence_prediction(video_path)
    result = 'The video is FAKE' if prediction >= 0.7 else 'The video is REAL'
    return jsonify({'result': result, 'parameters': parameters})

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)
