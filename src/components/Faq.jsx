import Lottie from "lottie-react";
import React, { useState } from "react";
import faqLottie from '../faq2.json'
import faqHeader from '../faqLottie.json'
 // Use your image path here

const FAQSection = () => {
  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I apply for a visa?",
      answer:
        "To apply for a visa, simply visit the application page, fill out the required details, and submit the necessary documents. You can track the status of your application online.",
    },
    {
      question: "What documents do I need for a visa application?",
      answer:
        "The required documents vary depending on the type of visa and the country. Generally, you'll need your passport, visa application form, photo, and financial documents.",
    },
    {
      question: "How long does the visa process take?",
      answer:
        "The processing time varies depending on the type of visa and the country you're applying to. Generally, it can take anywhere from 5 to 15 business days.",
    },
    {
      question: "Can I track my visa application?",
      answer:
        "Yes! Once your application is submitted, you can track its progress anytime through our portal. You'll receive real-time updates.",
    },
  ];

  // Toggle function to show/hide FAQ answers
  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the answer if it's already open
    } else {
      setOpenIndex(index); // Open the clicked answer
    }
  };

  return (
    <section className="container mx-auto  px-4 ">
        {/* <div className="flex justify-center  ">
            <Lottie className="w-[200px]" animationData={faqHeader}></Lottie>
        </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* FAQ Image */}
        <div className="flex justify-center relative">
          {/* <img
            src='https://i.ibb.co.com/xXrXp9J/frequently-asked.webp'
            alt="FAQ"
            className="rounded-lg shadow-xl w-[80%] sm:w-full h-auto object-cover"
          /> */}
          <Lottie className="w-full" animationData={faqLottie}></Lottie>
          {/* <img className="absolute w-[120px] sm:w-[200px] sm:-left-20 -top-20  -left-10 sm:-top-20" src="https://i.ibb.co.com/QMLdyZz/faqIcon.png" alt="" /> */}
        </div>

        {/* FAQ Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-center md:text-left text-orange-500">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <h3
                className="text-xl font-semibold text-gray-800 cursor-pointer"
                onClick={() => toggleAnswer(index)} // Toggle answer on click
              >
                {faq.question}
              </h3>

              {/* Smooth Toggle Effect */}
              <div
                className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                  openIndex === index ? "h-auto" : "h-0"
                }`}
              >
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p> // Only show answer if it's toggled open
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
