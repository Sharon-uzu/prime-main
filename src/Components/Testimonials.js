import React, { useState } from "react";
import img from "../Assets/entrepreneur-analyzing-marketing-statistics-working-financial-growth-report-hours-startup-office-african-american-workers-planning-company-strategy-increase-business-profit 2.png";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonialsData = [
  {
    id: 1,
    rating: 5.0,
    text: "Working with Primeforte was a game-changer for my business. They built a powerful e-commerce website for my furniture and wood products, and since launch, I’ve seen a huge boost in sales and customer trust. The site is easy to manage, fast, and beautifully designed. I couldn’t have asked for a better partner.",
    name: "Major Cas Construction Limited",
  },
  {
    id: 2,
    rating: 4.8,
    text: "Primeforte exceeded my expectations. Their team was professional, responsive, and made the entire process smooth. The end product truly reflects the quality I envisioned.",
    name: "Textile Limited",
  },
  {
    id: 3,
    rating: 5.0,
    text: "From start to finish, the Primeforte team delivered with excellence. Their tech expertise and customer support set them apart, and I’d gladly recommend them to any business going digital.",
    name: "Oxwill Ventures",
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
