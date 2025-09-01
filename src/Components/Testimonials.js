import React, { useState } from "react";
import img from "../Assets/entrepreneur-analyzing-marketing-statistics-working-financial-growth-report-hours-startup-office-african-american-workers-planning-company-strategy-increase-business-profit 2.png";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonialsData = [
  {
    id: 1,
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    name: "Fawzi Sayed",
  },
  {
    id: 2,
    rating: 4.8,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    name: "Jane Doe",
  },
  {
    id: 3,
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    name: "John Smith",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="tests">

      <div className="test-r">
        <h3>Hear From Our Clients</h3>
        <div className="star-rate">
          <h5>{testimonialsData[currentIndex].name}</h5>
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="s-i" />
          ))}
          <span>{testimonialsData[currentIndex].rating}</span>
        </div>
        <p>{testimonialsData[currentIndex].text}</p>

        {/* Pagination Arrows */}
        <div className="pagination">
            <div>
                <FaArrowLeft className="arrow" onClick={prevSlide} />
            </div>

            <div>
                <FaArrowRight className="arrow" onClick={nextSlide} />
            </div>
          
          
        </div>
      </div>

      <img src={img} alt="Clients" />


    </div>
  );
};

export default Testimonials;
