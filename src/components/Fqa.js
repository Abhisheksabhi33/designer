import React, { useState } from 'react';
import Drop from './Drop';
import Rad from './Rad';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          viewBox="0 0 24 24" // Change the viewBox if needed
        >
          <path
            fill="currentColor"
            d="M12 4l8 8H4z" // Change the path to your desired icon
          />
        </svg>
      </div>
      {isOpen && <p className="py-2 pl-2">{answer}</p>}
    </div>
  );
};

const F1 = () => {
  const faqData = [
    {
      question: 'Professional Category?',
      answer: 'Lorem Ipsum is simply dummy text.',
    },
    {
      question: 'Languages (1)',
      answer: 'All Languages',
    },
    {
      question: 'Rating (1)',
      answer: 'It is a long established fact.',
    },
    {
      question: 'Show More Filters',
      answer: 'It is a long established fact that a reader will be distracted.',
    },
    // Add more FAQ items here
  ];

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Location</h2>
      <div className="flex flex-wrap gap-4">
        <div className="w-full md:w-1/2">
          <Drop />
        </div>
        <div className="w-full md:w-1/2">
          <Rad />
        </div>
      </div>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default F1;
