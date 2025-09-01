import React, {useState} from 'react';
import logo from '../Assets/PF logo var 1 1.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
      setIsOpen(!isOpen);
  };


  return (
    <div className='header'>
        <header>
            <nav>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>

                <div className='bars' onClick={handleClick}>
                    {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                </div>

                <ul className={click ? 'menu active' : 'menu'}>
                    <li><Link to='/' onClick={closeMenuBar}>Home</Link></li>
                    <li><Link to='/service' onClick={closeMenuBar}>Services</Link></li>
                    {/* <li><a href='#pricing' onClick={closeMenuBar}>Pricing</a></li> */}
                    <li><a href='#contact' onClick={closeMenuBar}>Contact</a></li>
                    <li><Link to='/about' onClick={closeMenuBar}>About Us</Link></li>
                    {/* <li className='proj'><Link to='' onClick={closeMenuBar}>See Project</Link></li> */}
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
