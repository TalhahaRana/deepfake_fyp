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

// src/components/VideoUpload.js

// import React, { useState, useEffect } from "react";
// import "./video.css"; // Custom CSS for styling
// import uploading from "./assets/uploading.png"; // Upload icon
// import star from "./assets/star.gif"; // Loading animation
// import axios from "axios";
// import Login from "./Login"; // Import Login component

// function VideoUpload() {
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [token, setToken] = useState(null); // Stores the login token
//   const [history, setHistory] = useState([]); // Stores user upload history

//   useEffect(() => {
//     if (token) {
//       // Fetch user history if logged in
//       axios
//         .get("http://localhost:5000/history", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => setHistory(response.data))
//         .catch((error) => console.error("Error fetching history:", error));
//     }
//   }, [token]); // Runs whenever the token changes

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
//             ...(token && { Authorization: `Bearer ${token}` }), // Include token if available
//           },
//         }
//       );
//       setResult(response.data.result); // Display the result from the server
//     } catch (error) {
//       setError("An error occurred while uploading the file."); // Show error message
//     } finally {
//       setLoading(false); // Stop loading spinner
//     }
//   };

//   if (!token) {
//     // If not logged in, show the login form
//     return <Login setToken={setToken} />;
//   }

//   return (
//     <div className={`video ${loading ? 'dim' : ''}`}> 
//       {loading && ( // Show loading overlay if processing
//         <div className="overlay visible">
//           <div className="loading-box">
//             <img src={star} alt="Loading" />
//           </div>
//         </div>
//       )}
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
//           {result && <p>{result}</p>} // Show the result
//           {error && <p>{error}</p>} // Show any error
//         </div>
//       </div>
//       <div className="history">
//         <h2>Upload History</h2>
//         {history.length > 0 ? (
//           <ul>
//             {history.map((entry, index) => (
//               <li key={index}>
//                 <p>Video: {entry.video_name}</p>
//                 <p>Result: {entry.result}</p>
//                 <p>Date: {new Date(entry.timestamp).toLocaleString()}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No history available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VideoUpload;
