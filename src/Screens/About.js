import React,{useEffect} from 'react'
import abt from '../Assets/teamworking-startups-employees-leveraging-machine-learning-technology-office 1.png'
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';
import {useLocation} from "react-router-dom";
import WhiteHeader from '../Components/WhiteHeader';
import Contact from '../Components/Contact';
import img1 from '../Assets/industrial-designers-working-3d-model 2.png'
import img2 from '../Assets/entertainer-presenting-tablet-from-sponsor 1.png'

const About = () => {
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
      }, [pathname]);

  return (
    <div>
        <div className="aboutus">
            <WhiteHeader/>
            <div className="ab-txt">
                <h3>Who We Are!</h3>
            </div>
        </div>

         {/* who we are section */}

        <div className="who-we-are">
            <img src={abt} alt="" />

            <div className="w-l">
                <div className="grp1">
                    <h3>Who We Are!</h3>
                    <p>Primeforte is a forward-thinking tech company dedicated to providing innovative solutions in software development, digital transformation, and technology consulting. Our mission is to make technology accessible, impactful, and transformative for our clients</p>
                    
                </div>

               
            </div>

        </div>


        <div className="abtus">
            <h2>Our Vision</h2>
            <p>We aspire to be a leading global tech solutions company, building a future where every business—regardless of size or location—can thrive through technology. Our vision is to empower businesses with innovative, sustainable solutions that meet today’s needs while creating lasting impact in the digital economy of tomorrow.</p>

            <div className='mission'>
                <img src={img1} alt="" />

                <div>
                    <h2>Our Mission</h2>
                    <p>Our mission is to make technology easy and useful for businesses. We create smart solutions that solve real problems and help brands succeed long-term.</p>
                    <img src={img2} alt="" />

                </div>
            </div>
           
        </div>

        <Contact/>

        <Faq/>

        <Footer/>

    </div>
  )
}

export default About