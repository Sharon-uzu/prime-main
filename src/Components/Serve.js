import React,{useEffect} from 'react'
import {useLocation} from "react-router-dom";
import serv from '../Assets/service.png'
import { FaCloud, FaCoins, FaComment, FaLaptop, FaLightbulb, FaLock, FaPenSquare, FaSketch } from 'react-icons/fa';


const Serve = () => {
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
      }, [pathname]);

  return (
    <div>
       
        <div className="services" id='service'>
            <div className="s-top">
                <h3>Our Services</h3>
                <p>Understanding a product's capabilities requires a comprehensive assessment of its features, functionality, flexibility & integration.</p>
            </div>

            <div className="serv-flex">
                <div className="one">
                    <div className="one-card">
                        <div className="one-cc">
                            <div className='circ'>
                                <FaSketch className='cc-i'/>
                            </div>
                            <h4>Creative Design (Brand Identity & Graphics) </h4>
                            <p>We craft compelling brand identities, graphics, and marketing assets that make businesses stand out.</p>
                        </div>
                        
                    </div>

                    <div className="one-card" style={{background: '#FBFDEB'}}>
                        <div className="one-cc">
                            <div className='circ'>
                                <FaComment className='cc-i'/>
                            </div>
                            <h4>Social Media Management</h4>
                            <p>We help businesses grow their online presence through content creation, engagement, and performance-driven strategies.</p>
                        </div>
                        
                    </div>


                     <div className="one-card" style={{background: '#FFF5F5'}}>
                        <div className="one-cc">
                            <div className='circ'>
                                <FaLock className='cc-i'/>
                            </div>
                            <h4>Cybersecurity Solutions</h4>
                            <p>We protect businesses with vulnerability assessments, penetration testing, and real-time threat intelligence.</p>
                        </div>
                        
                    </div>

                </div>



                <div className="one">
                    <div className="one-card" style={{background: '#FFFCF8'}}>
                        <div className="one-cc">
                            <div className='circ'>
                                <FaLaptop className='cc-i'/>
                            </div>
                            <h4>Software Development & Maintenance</h4>
                            <p>We build and maintain scalable web and mobile applications tailored to business needs.</p>
                        </div>
                        
                    </div>

                    <div className="s-img">
                        <img src={serv} alt="" />
                    </div>

                    <div className="one-card" style={{background: '#F8F3FF'}}>
                        <div className="one-cc">
                            <div className='circ'>
                                <FaLightbulb className='cc-i'/>
                            </div>
                            <h4>Technology Consultancy & Training</h4>
                            <p>We provide expert guidance, training, and support to help businesses maximize technology.</p>
                        </div>
                        
                    </div>

                </div>

                

                <div className="one" style={{background: '#F9FFFA'}}>
                    <div className="one-card">
                        <div className="one-cc">
                            <div className='circ'>
                                <FaPenSquare className='cc-i'/>
                            </div>
                            <h4>Product Design & Project Management</h4>
                            <p>We design user-friendly digital products and manage projects from concept to completion with efficiency.</p>
                        </div>
                        
                    </div>

                     <div className="one-card" style={{background: '#FCF2FF'}}>
                        <div className="one-cc">
                            <div className='circ'>
                                <FaCoins className='cc-i'/>
                            </div>
                            <h4>Digital Platforms & Tools Development</h4>
                            <p>We create innovative digital platforms and tools that enhance business efficiency and growth.</p>
                        </div>
                        
                    </div>

                    <div className="one-card" style={{background: '#F6FFDE'}}>
                        <div className="one-cc">
                            <div className='circ'>
                                <FaCloud className='cc-i'/>
                            </div>
                            <h4>IT Infrastructure & Cloud Solutions</h4>
                            <p>We set up and manage IT systems, networks, and cloud services for seamless operations.</p>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Serve