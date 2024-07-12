import React from "react";
import Nav from "../modules/Nav";
import MovingComponent from "react-moving-text";


const Resources = () => {
  return (
    <div className="about_wrapper">
      <Nav />
      <div className="about_container">
        <h1 className="grad_two">How It Works</h1>
        <div className="work">
          <h2>How the Xception Model Works</h2>
          <p>
            The Xception model is a type of deep learning architecture
            specifically designed for image recognition tasks. Its name stands
            for "Extreme Inception," as it builds on the ideas from the
            Inception model but takes them to the next level. Here's a simple
            explanation of how it works: Key Concept: Depthwise Separable
            Convolutions
          </p>
          <h2>Standard Convolution:</h2>
          <p>
            Imagine you have an image that you want to analyze. In a standard
            convolution, you use a filter (like a small window) to slide over
            the image and detect patterns. This filter looks at both the spatial
            features (like edges and textures) and the depth (colors or
            channels) at the same time.
          </p>
          <h2>Depthwise Separable Convolutions:</h2>
          <p>
            The Xception model uses a special kind of convolution called
            "depthwise separable convolutions." This breaks the standard
            convolution into two simpler steps: Depthwise Convolution: This step
            applies a single filter to each color channel separately. For
            example, if you have a color image with red, green, and blue
            channels, the depthwise convolution will handle each channel on its
            own. Pointwise Convolution: This step combines the outputs from the
            depthwise convolution. It uses a 1x1 filter to mix the information
            from different channels. By separating these two steps, the model
            can be more efficient and capture details more effectively.
          </p>

          <h2>Depthwise Convolution:</h2>
          <p>
            Imagine you have three sheets of paper, each representing a color
            channel of an image (red, green, blue). You use a magnifying glass
            (filter) to look for specific patterns on each sheet individually.
            You note down interesting patterns you find on each sheet.
          </p>
          <h2>Pointwise Convolution:</h2>

          <p>
            After examining each sheet separately, you summarize your notes from
            all three sheets into a single summary (using the 1x1 filter). This
            combined summary gives you a complete picture of the patterns across
            all color channels. By doing this, the Xception model is able to
            efficiently learn and recognize complex patterns in images. enefits
            Efficiency: It reduces the number of calculations needed, making the
            model faster and more efficient. Accuracy: It captures detailed
            patterns better, which helps improve the model's performance on
            tasks like image classification and detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
