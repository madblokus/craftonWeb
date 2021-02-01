import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MenuItems } from './menuItems';
import LogoImg from '../../assets/images/logo3.svg'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbar, setNavbar] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  const changeBackground = () => {
    if (window.scrollY >= 175) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={LogoImg} alt='Logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url} onClick={item.onC}>
                    {item.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
