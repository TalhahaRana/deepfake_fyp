// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function App() {
// //   const [loading, setLoading] = useState(false);
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState(null);

// //   const handleUpload = async (e) => {
// //     setLoading(true);
// //     setError(null);
// //     setResult(null);

// //     const formData = new FormData();
// //     formData.append('video', e.target.files[0]);

// //     try {
// //       const response = await axios.post('http://localhost:5000/detect', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data'
// //         }
// //       });
// //       setResult(response.data.result);
// //     } catch (error) {
// //       setError('An error occurred while uploading the file.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <input type="file" onChange={handleUpload} />
// //       {loading && <p>Loading...</p>}
// //       {result && <p>{result}</p>}
// //       {error && <p>{error}</p>}
// //     </div>
// //   );
// // }

// // export default App;

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function VideoUpload() {
// //   const [loading, setLoading] = useState(false);
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState(null);

// //   const handleUpload = async (e) => {
// //     setLoading(true);
// //     setError(null);
// //     setResult(null);

// //     const formData = new FormData();
// //     formData.append('video', e.target.files[0]);

// //     try {
// //       const response = await axios.post('http://localhost:5000/detect', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data'
// //         }
// //       });
// //       setResult(response.data.result);
// //     } catch (error) {
// //       setError('An error occurred while uploading the file.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <input type="file" onChange={handleUpload} />
// //       {loading && <p>Loading...</p>}
// //       {result && <p>{result}</p>}
// //       {error && <p>{error}</p>}
// //     </div>
// //   );
// // }

// // export default VideoUpload;

// import React, { useState } from "react";
// import "./video.css";
// import uploading from "./assets/uploading.png";
// import star from "./assets/star.gif";
// import axios from "axios";

// function VideoUpload() {
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleUpload = async (e) => {
//     setLoading(true);
//     setError(null);
//     setResult(null);

//     const formData = new FormData();
//     formData.append("video", e.target.files[0]);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/detect",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setResult(response.data.result);
//     } catch (error) {
//       setError("An error occurred while uploading the file.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="video">
//       <div className="content">
//         <p>Upload Video to </p>
//         <p className="content_grad">Reveal Truth</p>
//       </div>
//       <div className="hero">
//         <div className="upload">
//           <div className="icon">
//             <img src={uploading} />
//           </div>
//           <div>
//             <input type="file" onChange={handleUpload} />
//           </div>
//         </div>
//         <div className="result">
//         {loading && <div className="icon"><img src={star}/></div>}
//         {result && <p>{result}</p>}
//         {error && <p>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoUpload;

// import React, { useState } from "react";
// import "./video.css"; // Ensure this file is updated with the new styles
// import uploading from "./assets/uploading.png"; // Your upload icon
// import star from "./assets/star.gif"; // Your loading spinner
// import axios from "axios";

// function VideoUpload() {
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleUpload = async (e) => {
//     setLoading(true);
//     setError(null);
//     setResult(null);

//     const formData = new FormData();
//     formData.append("video", e.target.files[0]);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/detect",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setResult(response.data.result);
//     } catch (error) {
//       setError("An error occurred while uploading the file.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={`video ${loading ? "blur" : ""}`}>
//       <div className={`overlay ${loading ? "visible" : ""}`}>
//         {loading && <img src={star} alt="Loading..." />}
//       </div>
//       <div className="content">
//         <p>Upload Video to </p>
//         <p className="content_grad">Reveal Truth</p>
//       </div>
//       <div className="hero">
//         <div className="upload">
//           <div className="icon">
//             <img src={uploading} alt="Upload Icon" />
//           </div>
//           <div>
//             <input type="file" onChange={handleUpload} />
//           </div>
//         </div>
//         <div className="result">
//           {result && <p>{result}</p>}
//           {error && <p>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoUpload;
import React, { useState } from "react";
import "./video.css";
import uploading from "./assets/uploading.png";
import upload from "./assets/upload.png";
import star from "./assets/star.gif";
import axios from "axios";

function VideoUpload() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("video", e.target.files[0]);

    try {
      const response = await axios.post(
        "http://localhost:5000/detect",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data.result);
    } catch (error) {
      setError("An error occurred while uploading the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`video ${loading ? "dim" : ""}`}>
      {loading && (
        <div className="overlay visible">
          <div className="loading-box">
            <img src={star} alt="Loading" />
          </div>
        </div>
      )}
      <div className="content">
        <p>Upload Video to </p>
        <p className="content_grad">Reveal Truth</p>
      </div>
      <div className="hero">
        <div className="upload">
          <div className="icon">
            <img src={uploading} alt="Upload Icon" />
          </div>
          <div>
            <input type="file" onChange={handleUpload} />
          </div>
        </div>
        <div className="result">
          {result && (
            <div className="ans">
              <p>{result}</p>
              <img src={upload} alt="Upload Icon" />
            </div>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;
