import './navbar.css'
import Signin from '../SignIn.svg';
import Legal from '../Legal.svg';
import Licenses from '../Licenses.svg';
import Security from '../Security.svg';
import Careers from '../Careers.svg';
import Press from '../Press.svg';
import Support from '../Support.svg';
import Status from '../Status.svg';
import Codeblog from '../Codeblog.svg';
import React, {useEffect, useState} from 'react'
import Hamburger from '../hamburger.png';
export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
      useEffect(()=>{
        const changeWidth =()=>{
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return ()=>{
            window.removeEventListener('resize',changeWidth)
        }
      },[])
    
  return (
    <nav>
        {(toggleMenu || screenWidth>768) && (
    <ul className='list'>
      <li className='lt'><img src={Signin} className="header-Signin items" alt="logo" /></li>
      <li className='lt'><img src={Legal} className="header-Legal items" alt="logo" /></li>
      <li className='lt'><img src={Licenses} className="header-Licenses items" alt="logo" /></li>
      <li className='lt'><img src={Security} className="header-Security items" alt="logo" /></li>
      <li className='lt'><img src={Careers} className="header-Careers items" alt="logo" /></li>
      <li className='lt'><img src={Press} className="header-Press items" alt="logo" /></li>
      <li className='lt'><img src={Support} className="header-Support items" alt="logo" /></li>
      <li className='lt'><img src={Status} className="header-Status items" alt="logo" /></li>
      <li className='lt'><img src={Codeblog} className="header-Codeblog items" alt="logo" /></li>
    </ul>
    )}
    <span><img onClick={toggleNav} src={Hamburger} className="btn" alt="logo" /></span>
  </nav>
  )
}

