// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleUpload = async (e) => {
//     setLoading(true);
//     setError(null);
//     setResult(null);

//     const formData = new FormData();
//     formData.append('video', e.target.files[0]);

//     try {
//       const response = await axios.post('http://localhost:5000/detect', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setResult(response.data.result);
//     } catch (error) {
//       setError('An error occurred while uploading the file.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleUpload} />
//       {loading && <p>Loading...</p>}
//       {result && <p>{result}</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import axios from 'axios';

// function VideoUpload() {
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleUpload = async (e) => {
//     setLoading(true);
//     setError(null);
//     setResult(null);

//     const formData = new FormData();
//     formData.append('video', e.target.files[0]);

//     try {
//       const response = await axios.post('http://localhost:5000/detect', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setResult(response.data.result);
//     } catch (error) {
//       setError('An error occurred while uploading the file.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleUpload} />
//       {loading && <p>Loading...</p>}
//       {result && <p>{result}</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default VideoUpload;


import React, { useState } from 'react';
import axios from 'axios';

function VideoUpload() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('video', e.target.files[0]);

    try {
      const response = await axios.post('http://localhost:5000/detect', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResult(response.data.result);
    } catch (error) {
      setError('An error occurred while uploading the file.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {loading && <p>Loading...</p>}
      {result && <p>{result}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default VideoUpload;
