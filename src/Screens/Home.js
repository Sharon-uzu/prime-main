import React,{useEffect} from 'react'
import Header from '../Components/Header'
import hero from '../Assets/black-corporate-team-collaborate-global-investment-strategy 2.png'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import abt from '../Assets/teamworking-startups-employees-leveraging-machine-learning-technology-office 1.png'
import { GoCheckCircle } from "react-icons/go";
import Footer from '../Components/Footer';
import Faq from '../Components/Faq';
import Testimonials from '../Components/Testimonials';
import {useLocation} from "react-router-dom";
import Contact from '../Components/Contact';
import Serve from '../Components/Serve';

const Home = () => {
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
      }, [pathname]);


  return (
    <div>

        {/* Header */}

        <Header/>

        {/* hero-section */}

        <div className="hero">
            <div className="h-top">
                <h2>Shaping the Future of Tech Innovation</h2>
                <p>At Primeforte, we deliver cutting-edge tech solutions that empower businesses and individuals to excel in a digital-first world.</p>
            </div>
            <div className="h-btns">
                <a href='#contact'><button>Get In Touch</button></a>
                <Link to='/about'><button className='exp-btn'>Explore</button></Link>
            </div>
            <img src={hero} alt="" />
            
        </div>

        {/* who we are section */}

        <div className="who-we-are">
            <img src={abt} alt="" />

            <div className="w-l">
                <div className="grp1">
                    <h3>Who We Are!</h3>
                    <p>Primeforte is a forward-thinking tech company dedicated to providing innovative solutions in software development, digital transformation, and technology consulting. Our mission is to make technology accessible, impactful, and transformative for our clients</p>
                    <div className="ab-btn">
                            <Link to=""><button>
                                <IoIosArrowRoundForward className='ab-i'/>
                                Read More
                            </button></Link>
                        </div>
                </div>

               
            </div>

        </div>

        {/* service section */}

        <Serve/>
        <Testimonials/>

        {/* contact section */}
       <Contact/>

        <Faq/>

        <Footer/>

    </div>
  )
}

export default Home