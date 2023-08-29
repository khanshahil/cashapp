import React from 'react';
import './body.css';
import cash from '../CASH.svg';
import app from '../APP.svg';
import phone from '../intro-phone1.svg';
// import introstairs from '../intro-stairs.svg';
function Body() {
    return (
        <div className="cash-container" >
             <div><img src={cash} className="body-logo" alt="logo" /></div>
             <div><img src={phone} className="body-mobile" alt="logo" /></div>
             <div><img src={app} className="body-app" alt="logo" /></div>
             {/* <div><img src={introstairs} className="header-stairs" alt="logo" /></div> */}
        </div>
    );
}



export default Body;