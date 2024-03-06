import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import "./LeftPortion.css";
import profileImg1 from "./profile_img1.jpg";
import { LeftItems, LeftProductsItems, LeftFolders } from './LeftItems';

function LeftPortion() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    return (
        <div className="left-col col-12 col-md-3 col-xl-3 p-0">
            <div className='left-portion'>
                <div className='sticky'>
                    <div className=' heading d-flex align-items-center justify-content-between'>
                        <h6><i className="fa-solid fa-file-code"></i> InnovationHub</h6>
                        <img className='profileimg' src={profileImg1} />
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleNavbar}
                        >
                            <i className="fa fa-bars navigation" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className={`collapse navbar-collapse ${isNavbarVisible ? 'show' : ''}`}>
                         <LeftItems name="Design team" num="x + 1" />
                        <LeftItems name="Marketing team" num="x + 1" />
                        <LeftItems name="Development Team" num="x + 1" />
                        <LeftItems name="Create a form" />
                        <LeftItems name="Folders" num="+" />
                        <LeftProductsItems name="Products" />
                        <LeftFolders name="Sales" />
                         <LeftFolders name="Design"  />
                        <LeftFolders name="Office"  />
                        <LeftFolders name="Legel" />
                        <div className="bottom">
                            <LeftItems name="Invite teammates" />
                            <LeftItems name="Help and first steps" num="+" />
                            <div className="container dash d-flex align-item-center justify-content-between">
                                <p>7 days left on trial</p>
                                <div className='x-div'><button className='btn btn-dark'>Add bling</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='conditional'>
                        <LeftItems name="Design team" num="x + 1" />
                        <LeftItems name="Marketing team" num="x + 1" />
                        <LeftItems name="Development Team" num="x + 1" />
                        <LeftItems name="Create a form" />
                        <LeftItems name="Folders" num="+" />
                        <LeftProductsItems name="Products" />
                        <LeftFolders name="Sales" />
                         <LeftFolders name="Design" />
                        <LeftFolders name="Office" />
                        <LeftFolders name="Legel" />
                         <div className="bottom">
                            <LeftItems name="Invite teammates" />
                            <LeftItems name="Help and first steps" num="+" />
                            <div className="container dash d-flex align-item-center justify-content-between">
                                <p>7 days left on trial</p>
                                <div className='x-div'><button className='btn btn-dark'>Add bling</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftPortion;
