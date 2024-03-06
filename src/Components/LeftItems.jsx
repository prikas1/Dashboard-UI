import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import "./LeftPortion.css";

export function LeftItems(props) {
  return (
    <div className="container dash d-flex align-item-center justify-content-between">
      <p><i className="fa fa-tachometer" aria-hidden="true"></i>{props.name}</p>
      <div className='x-div'><p>{props.num}</p></div>
    </div>
  );
}


export function LeftProductsItems(props) {
  
  const [containerVisible, setContainerVisible] = useState(true);
  const toggleContainer = () => {
    setContainerVisible(!containerVisible);
  };

 
  const [isBlueBackground, setIsBlueBackground] = useState(false);

 
  const toggleBackground = () => {
    setIsBlueBackground(!isBlueBackground);
  };

  return (
    <div className=''>
 <div className={`container products dash d-flex align-item-center justify-content-between ${isBlueBackground ? 'changeProduct-background' : ''}`}>
        <p><i class="fa-regular fa-folder"></i>{props.name}</p>
        <div className='x-div' onClick={() => { toggleContainer(); toggleBackground(); }}>
          <p>{containerVisible ? '-' : '+'}</p>
        </div>
      </div>
      {containerVisible && (
        <div className="produstc-list">
          <div className='product-list-items'>
            <p>Roadmap</p>
            <p>Feedback</p>
            <p>Performance</p>
            <p>Team</p>
            <p>Analytics</p>
            <p><i className="fa fa-tachometer" aria-hidden="true"></i>Add new sub</p>
          </div>
        </div>
      )}
    </div>
  );
}


export function LeftFolders(props) {
  const [containerVisible, setContainerVisible] = useState(false);
  const [isRedBackground, setIsRedBackground] = useState(false);

  const toggleContainer = () => {
    setContainerVisible(!containerVisible);
  };

  const toggleBackground = () => {
    setIsRedBackground(!isRedBackground);
  };

  return (
    <div>
      <div className={`container  dash d-flex align-item-center justify-content-between ${isRedBackground ? 'changeSales-background' : ''}`}>
        <p><i class="fa-regular fa-folder"></i>{props.name}</p>
        <div className='x-div' onClick={() => { toggleContainer(); toggleBackground(); }}>
          <p>{containerVisible ? '-' : '+'}</p>
        </div>
      </div>
      {containerVisible && (
        <div className="produstc-list">
          <div className='product-list-items'>
            <p>Roadmap</p>
            <p>Feedback</p>
            <p>Performance</p>
            <p>Team</p>
            <p>Analytics</p>
            <p><i className="fa fa-tachometer" aria-hidden="true"></i>Add new sub</p>
          </div>
        </div>
      )}
    </div>
  );
}