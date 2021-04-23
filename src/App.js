import React, { useState } from 'react';
import firebase from "./firebase.js";

async function audioToBase64(audioFile) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(audioFile);
  });
}

function App() {

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);


  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const callThis = firebase.app().functions().httpsCallable("callThis");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);
    audioToBase64(selectedFile).then(res => callThis(res)).then(res => console.log(res))
  }

  return (
    <div className="App">
      <h1>
        hello welcome to this website
      </h1>
      <p>
        select file pls :)
      </p>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      {isFilePicked ? console.log(audioToBase64(selectedFile)) : console.log("Ingen fil")}
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
