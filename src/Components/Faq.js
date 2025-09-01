import React, { useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import faq from "../Assets/faq.png";

const faqData = [
  {
    id: 1,
    question: "What services does Primeforte offer?",
    answer: "We provide end-to-end technology solutions, including software development, web and mobile app design, cloud services, cybersecurity, IT consulting, and digital transformation strategies.",
  },
  {
    id: 2,
    question: "Who are your typical clients?",
    answer: "Our clients range from startups and SMEs to large enterprises across industries such as finance, e-commerce, education, and healthcare. We also work with individuals looking to scale their digital presence.",
  },
  {
    id: 3,
    question: "How do I get started with Primeforte?",
    answer: "Simply reach out through our Contact Page or request a consultation. Our team will assess your needs, recommend the right solutions, and guide you through the next steps.",
  },
  {
    id: 4,
    question: "Do you offer custom solutions or pre-built products?",
    answer: "We specialize in custom solutions tailored to your unique business needs, but we also provide scalable digital products that can be adapted to your operations.",
  },
  {
    id: 5,
    question: "How much do your services cost?",
    answer: "Our pricing depends on the scope, complexity, and timeline of your project. After an initial consultation, we’ll provide a transparent quote with no hidden fees.",
  },
  {
    id: 6,
    question: "What is your project development process?",
    answer: "We follow an agile development methodology, ensuring regular communication, iterative progress, and flexibility to adapt to changing requirements throughout the project lifecycle.",
  },
  {
    id: 7,
    question: "What kind of support do you offer after project completion?",
    answer: "We provide ongoing maintenance, updates, and technical support to ensure your solutions remain secure, efficient, and aligned with your evolving business needs.",
  },
  {
    id: 8,
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and requirements. We’ll provide a detailed timeline during the planning phase and keep you updated throughout the development process.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
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
