import './header.css';
import introstairs from '../intro-stairs.svg';
import Dollar from '../Dollar.svg'
import introcube1 from '../intro-cube1.svg';
import eyebutton from '../eyebutton.svg';
function Header() {
  return (
    <div className='header-container'>
      <div className='header-first'>
      <div style={{margin:"20px 0 0 40px",position:"relative",zIndex:"999999"}}><img src={Dollar} className="absolute-dollar" alt="logo" /></div>
      <div><img src={introcube1} className="header-cube" alt="logo" /></div>
      </div>
      <div className='header-second'>
      <span><img  style={{position:"relative", zIndex: "99999"}} src={eyebutton} className="header-logo" alt="logo" /></span>
      <div><img src={introstairs} className="header-stairs" alt="logo" /></div>
      </div>
    </div>
  );
}



export default Header;