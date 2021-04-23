import React, { useState } from 'react';
import firebase from "./firebase.js";

function App() {

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);


  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);
  }

  const callThis = firebase.app().functions().httpsCallable("callThis");
  callThis({}).then((res) => console.log(res)).catch((err) => console.log(err))
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
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
