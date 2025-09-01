import React, { useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import faq from "../Assets/faq.png";

const faqData = [
  {
    id: 1,
    question: "How does Daypal ensure helpers are trustworthy?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores odio. ipsum dolor sit amet, consectetur adipisicing elit. Maiores odio.",
  },
  {
    id: 2,
    question: "What payment methods are supported?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores odio.",
  },
  {
    id: 3,
    question: "Is Daypal available in my area?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores odio.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(1); // Only first question open by default

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id); // Toggle or close all
  };

  return (
    <div className="faq">
      <h3>Frequently Asked Questions</h3>
      <h6>
We hope this FAQ section has addressed some of your common questions.       </h6>

      <div className="faq-flex">
        <div className="f-l">
          {faqData.map(({ id, question, answer }) => (
            <div className="f1" key={id}>
              <div className="f1-c" onClick={() => toggleFaq(id)}>
                <h5>
                  {id}. {question}
                  {openId === id ? <HiOutlineMinusSm className="f-i" /> : <HiOutlinePlusSm className="f-i" />}
                </h5>
                {openId === id && <p className="faq-answer">{answer}</p>}
              </div>
              
            </div>
          ))}
        </div>

        <div className="faq-img">
          <img src={faq} alt="FAQ Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
