import React from 'react';
import './footer.css';
import Appstore from '../AppStore.svg';
import GooglePlay from '../GooglePlay.svg';
import Arrow from '../Arrow.svg';
import Broker from '../Broker.svg';
import Pause from '../Pause.svg';
import Twitter from '../Twitter.svg';
import Insta from '../Insta.svg';
function Footer() {
    return (
        <div className="footer-container" >
            <div className='footer-first'>
                <span><img src={Appstore} className="footer-store" alt="logo" /></span>
                <span><img src={GooglePlay} className="footer-play" alt="logo" /></span>
            </div>
            <div className='footer-mid'> 
                <img src={Arrow} className="footer-logo" alt="logo" />
            </div>
            <div className='footer-second'>
                <img src={Broker} className="footer-logo" alt="logo" />
            </div>
            <div className='footer-last'>
                <span><img src={Pause} className="footer-pause" alt="logo" /></span>
                <span><img src={Twitter} className="footer-twitter" alt="logo" /></span>
                <span><img src={Insta} className="footer-insta" alt="logo" /></span>
            </div>
        </div>
    );
}



export default Footer;