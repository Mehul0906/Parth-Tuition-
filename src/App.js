// import React, { useState, useRef } from 'react';
// import html2canvas from 'html2canvas';

// function App() {
//   const [name, setName] = useState('');
//   const [submittedName, setSubmittedName] = useState('');
//   const [image, setImage] = useState(null);
//   const formRef = useRef(null);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedName(name);
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setImage(event.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDownload = () => {
//     if (formRef.current) {
//       html2canvas(formRef.current).then(canvas => {
//         const link = document.createElement('a');
//         link.href = canvas.toDataURL('image/jpeg');
//         link.download = 'form.jpg';
//         link.click();

//         setTimeout(() => {
//           window.location.reload();
//         }, 1000);
//       });
//     }
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>React Form Example</h1>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <div>
//           <div style={{ marginBottom: '10px' }}>
//             <label className='input'>
//               Name:
//               <input
//                 type="text"
//                 value={name}
//                 onChange={handleNameChange}
//                 style={{ width:'50%',height:"20px", borderRadius: '15px', border: '2px solid #007bff', padding: '10px' }}
//               />
//             </label>
//             <button  onClick={handleNameSubmit} style={{ marginLeft: '10px' }}>
//               Add Name
//             </button>
//           </div>
//           <div class="file-upload">
//             <label for="file">Upload Image</label>
//             <input type="file" id="file" accept="image/*"/>
//         </div>
//         </div>
//       </div>
      
//       <form ref={formRef} style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', display: 'inline-block', backgroundColor: '#f9f9f9' }}>
//         <div style={{
//           width: '150px', height: '150px', border: '2px solid blue', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
//           display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontWeight: 'bold', fontSize: '16px', textAlign: 'center'
//         }}>
//           {submittedName || 'Your Name Here'}
//         </div>
//         <div style={{ marginTop: '20px' }}>
//           {image ? (
//             <img
//               src={image}
//               alt="Uploaded"
//               style={{ width: '150px', height: '150px', border: '1px solid #ddd' }}
//             />
//           ) : (
//             <div style={{ width: '150px', height: '150px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
//               Your Image Here
//             </div>
//           )}
//         </div>
//         {submittedName && image && (
//           <button type="button" onClick={handleDownload} style={{ marginTop: '20px' }}>
//             Download as JPG
//           </button>
//         )}
//       </form>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useRef } from "react";
// import html2canvas from "html2canvas";

// function App() {
//   const [name, setName] = useState("");
//   const [submittedName, setSubmittedName] = useState("");
//   const [image, setImage] = useState(null);
//   const [fileName, setFileName] = useState(""); // ✅ File name store karne ke liye
//   const formRef = useRef(null);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedName(name);
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setImage(event.target.result);
//       };
//       reader.readAsDataURL(file);
//       setFileName(file.name); // ✅ File name store ho raha hai
//     }
//   };

//   const handleDownload = () => {
//     if (formRef.current) {
//       html2canvas(formRef.current).then((canvas) => {
//         const link = document.createElement("a");
//         link.href = canvas.toDataURL("image/jpeg");
//         link.download = "form.jpg";
//         link.click();

//         setTimeout(() => {
//           window.location.reload();
//         }, 1500);
//       });
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <input
//           type="text"
//           placeholder="નામ"
//           value={name}
//           onChange={handleNameChange}
//           style={styles.input}
//         />
//         <button style={styles.button} onClick={handleNameSubmit}>
//           Add Name
//         </button>

//         {/* ✅ File Upload Custom Button */}
//         <div style={styles.fileUpload}>
//           <label htmlFor="file" style={styles.fileLabel}>
//             Upload Image
//           </label>
//           <input
//             type="file"
//             id="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             style={styles.hiddenInput} // ✅ File input hide kiya
//           />
//           {/* ✅ Agar image select ki hai to filename show hoga */}
//           {fileName && <p style={styles.fileName}>{fileName}</p>}
//         </div>
//       </div>

//       {/* Card Content */}
//       <div style={styles.card} ref={formRef}>
//         <div style={styles.CardSecond}>
//           <img src="./img/Logo.png" alt="Logo" style={styles.logo} />
//           <h1 style={styles.heading}>પાર્થ નોલેજ ઇન્સ્ટિટ્યૂટ</h1>
//         </div>
//         <h2 style={styles.subtitle}>આ સંસ્થા સાથે મારો અનુભવ <br /> ખૂબ સારો રહ્યો.</h2>

//         {/* Hexagon with Image and Name */}
//         <div style={styles.Hexagonfirst}>
//           <div style={{
//             ...styles.hexagon,
//             backgroundImage: image ? `url(${image})` : "none",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}>
//           </div>
//           <h3 style={styles.boardText}>
//             ધોરણ ૧૦ હોય કે ૧૨ બોર્ડના વર્ષ માટે તો 'પાર્થ' જ
//           </h3>
//         </div>
        
//         <div style={styles.NameinputFirst}>
//           <input
//             type="text"
//             placeholder="નામ"
//             value={submittedName}
//             readOnly
//             style={styles.nameInput}
//           />
//           <p style={styles.note}>મને એ વાતનો આનંદ છે કે મે પાર્થ પસંદ કર્યું.</p>
//         </div>

//         {/* Contact Numbers */}
//         <div style={styles.contactBoxContainer}>
//           <div style={styles.contactBox}>પુણાગામ - 7057050701</div>
//           <div style={styles.contactBox}>સીતાનગરચોક - 9140279279</div>
//           <div style={styles.contactBox}>યોગીચોક - 7575736271</div>
//           <div style={styles.contactBox}>વરુછોક - 6624252525</div>
//         </div>

//         {/* Download Button */}
//         {submittedName && image && (
//           <button style={styles.button} onClick={handleDownload}>
//             Download as JPG
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "au",
//     backgroundColor: "#f8f9fa",
//     gap: "40px",
//   },
//   sidebar: {
//     width: "25%",
//     boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//     padding: "20px",
//     display: "flex",
//     height: "100vh",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   input: {
//     width: "80%",
//     height: "30px",
//     border: "2px solid #007bff",
//     borderRadius: "15px",
//     padding: "10px",
//     marginBottom: "10px",
//     alignItems: "center",
//     marginTop: "60%",
//   },
//   button: {
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     fontSize: "15px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   fileUpload: {
//     marginTop: "20px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   fileLabel: {
//     cursor: "pointer",
//     backgroundColor: "#007bff",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     fontSize: "14px",
//     fontWeight: "bold",
//     textAlign: "center",
//     display: "inline-block",
//   },
//   hiddenInput: {
//     display: "none", // ✅ File input hide kiya
//   },
//   fileName: {
//     marginTop: "10px",
//     fontSize: "14px",
//     color: "#007bff",
//     fontWeight: "bold",
//   },
//   card: {
//     width: "45%",
//     height: "100vh",
//     padding: "20px",
//     backgroundColor: "white",
//     borderRadius: "10px",
//     boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   },
//   CardSecond: {
//     display: "flex",
//     alignItems: "center",
//   },
//   logo: {
//     width: "95px",
//     marginTop: "10px",
//   },
//   heading: {
//     color: "#007bff",
//     fontSize: "52px",
//     fontWeight: "bold",
//     marginLeft: "20px",
//   },
//   subtitle: {
//     color: "#007bff",
//     fontSize: "40px",
//   },
//   Hexagonfirst: {
//     display: "flex",
//     alignItems: "center",
//   },
//   hexagon: {
//     width: "200px",
//     height: "160px",
//     border: "4px solid #007bff",
//     clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//     margin: "20px auto",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   NameinputFirst: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   nameInput: {
//     padding: "8px",
//     width: "210px",
//     border: "2px solid #007bff",
//     borderRadius: "15px",
//     fontSize: "16px",
//     fontWeight: "bold",
//   },
//   boardText: {
//     color: "#ab150a",
//     marginTop: "5%",
//     fontSize: "38px",
//     fontWeight: "bold",
//   },
//   note: {
//     color: "#007bff",
//     fontSize: "38px",
//     paddingTop: "2%",
//   },
//   contactBoxContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     // marginTop: "10px",
//   },
//   contactBox: {
//     background: "#007bff",
//     color: "white",
//     padding: "10px",
//     borderRadius: "5px",
//     margin: "5px",
//     width: "35%",
//   },
// };

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
// import logo from './img/fevicon.ico';
import "./App.css"; // Separate CSS file for better readability


function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const formRef = useRef(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
      setFileName(file.name);
    }
  };
  

  const handleDownload = () => {
    if (formRef.current) {
      html2canvas(formRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpeg");
        link.download = "form.jpg";
        link.click();
        setTimeout(() => window.location.reload(), 1500);
      });
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <input type="text" placeholder="નામ" value={name} onChange={handleNameChange} className="input" />
        <button className="button" onClick={handleNameSubmit}>Add Name</button>
        <div className="fileUpload">
          <label htmlFor="file" className="fileLabel">Upload Image</label>
          <input type="file" id="file" accept="image/*" onChange={handleImageUpload} className="hiddenInput" />
          {fileName && <p className="fileName">{fileName}</p>}
        </div>
        {submittedName && image && (
          <button className="button" onClick={handleDownload}>Download as JPG</button>
        )}
      </div>

      <div className="card" ref={formRef}>
        <div className="CardSecond">
          <img src="./img/Logo.png" alt="Logo" className="logo" />
          <h1 className="heading" style={{color:"#3d4099"}}>પાર્થ નોલેજ ઇન્સ્ટિટ્યૂટ</h1>
        </div>
        <h2 className="subtitle" style={{color:"#007bff",fontSize:"32px"}}>આ સંસ્થા સાથે મારો અનુભવ <br></br> ખૂબ સારો રહ્યો.</h2>
        <div className="Hexagonfirst">
          <div className="hexagon" style={{ backgroundImage: image ? `url(${image})` : "none" }}></div>
          <h3 className="boardText" style={{color:"#b81208"}}>ધોરણ ૧૦ હોય કે ૧૨ બોર્ડના વર્ષ માટે તો 'પાર્થ' જ</h3>
        </div>
        <div className="NameinputFirst">
          <input type="text" placeholder="નામ" value={submittedName} readOnly className="nameInput" />
          <p className="note" style={{color:"#007bff"}}>મને એ વાતનો આનંદ છે કે <br></br> મે પાર્થ પસંદ કર્યું.</p>
        </div>
        <div className="contactBoxContainer">
          <div className="contactBox">પુણાગામ - ૮૭૫૮૭૫૦૫૦૧</div>
          <div className="contactBox">સીતાનગરચોક - ૮૧૪૦૨૮૧૨૮૧</div>
          <div className="contactBox">યોગીચોક - ૭૫૭૫૮૩૮૨૮૧</div>
          <div className="contactBox">વરુછોક - ૯૬૨૪૨૫૨૪૨૫</div>
        </div>
       
      </div>
    </div>
  );
}




export default App;
