import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import LeftPortion from './Components/LeftPortion';
import RightPortion from './Components/rightPortion';
import './App.css';


function App() {
  return (
      <div className="App container-fluid">
       <div className="row align-items-stretch ">
         <LeftPortion />
         <RightPortion />
        </div>
      </div>
  );
  

}

export default App;

