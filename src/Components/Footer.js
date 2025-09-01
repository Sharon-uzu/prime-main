import React from 'react'
import logo from '../Assets/PF logo var 1 1.png'
import { Fa0 } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <div className="f-l">
                <img src={logo} alt="" />
                <p>Primeforte is a forward-thinking technology solutions company dedicated to helping businesses thrive in the digital age.</p>
                <div className="footer-icon">
                    <a href=""><FaFacebook className="fab fa-facebook-f"/></a>
                    <a href=""><FaTwitter className="fab fa-twitter"/></a>
                    <a href=""><FaLinkedin className="fab fa-linkedin-in"/></a>
                    <a href=""><FaInstagram className="fab fa-instagram"/></a>

                </div>
            </div>

            <div className="f-r">
                <h4>Services</h4>
                <div className="top">
                    <a>Product Design</a>
                    <a>Creative Design</a>
                    <a>Cybersecurity Solutions</a>
                    <a>Social Media Management</a>
                    <a>IT Infrastructure & Cloud Solutions</a>
                    <a>Technology Consultancy & Training</a>
                    <a>Digital Platforms & Tools Development</a>
                </div>

                
            </div>

            <div className="f-r">
                <h4>Features</h4>
                <div className="top">
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <a href="#contact">Contact</a>
                    <a href="">Projects</a>
                    <a href="">Pricing</a>
                </div>

                
            </div>

            <div className="f-r">
                <h4>Info</h4>
                <div className="top">
                    <a href="tel:0811 061 9799">0811 061 9799</a>
                    <a href="mailto:info@primforte.com">info@primforte.com</a>
                    <a>20 Apa Moto Road, Off Odani Road, Elelenwon, Port Harcourt.</a>
                </div>

                
            </div>

        </footer>
    </div>
  )
}

export default Footer