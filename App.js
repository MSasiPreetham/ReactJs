import React from 'react';
// import logo from './logo.svg';
import profileImage from './img/mysticker.png';
import './App.css';
import './resumeex.css';

function App() {
  return (
    // <div className="App">
    //   <h1>My react App</h1>
    //   <h2>Author: Sasi Preetham</h2>
    //   <img src={profileImage} alt="profile-image" />
    // </div>
    <div class="h1">
      Resume
    </div>
    <div class="mainDiv">
      <div class="childDiv">
        <div class="img">
          <img src="images/download.jpg" alt="img" />
        </div>
        <div class="container">
         <h4><b><a href="sasi.html">M SasiPreetham</a></b></h4>
        </div>
      </div>
      <div class="childDiv">
        <div class="img">
          <img src="images/download.jpg" alt="img" />
        </div>
        <div class="container">
          <h4><b><a href="karthik.html">Karthik P</a></b></h4>
        </div>
      </div>
    </div>
  )
};

export default App;
