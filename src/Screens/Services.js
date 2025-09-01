import React,{useEffect} from 'react'
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';
import {useLocation} from "react-router-dom";
import WhiteHeader from '../Components/WhiteHeader';
import Contact from '../Components/Contact';

const Services = () => {
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
                <h3>Our Services</h3>
            </div>
        </div>

      <Services/>

        <Contact/>

        <Faq/>

        <Footer/>

    </div>
  )
}

export default Services