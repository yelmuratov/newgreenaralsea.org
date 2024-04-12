import React, { useState } from "react"

interface FaqItemProps {
    faq:IFAQ
}


const FaqItem: React.FC<FaqItemProps> = ({faq}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
  
    return (
        <div id="accordionFlushExample" className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="border-b">
          <h2 className="mb-0">
            <button
              className={`flex items-center gap-2 justify-between w-full text-[14px] md:text-[20px] py-4 px-4 text-left font-semibold text-gray-800 transition duration-300 ease-in-out hover:bg-blue-50 focus:outline-none ${isOpen ? 'bg-blue-100' : 'bg-white'}`}
              onClick={toggleAccordion}
              aria-expanded={isOpen}
              aria-controls="flush-collapseOne">
              <span dangerouslySetInnerHTML={{ __html: faq.question }}></span>
              <svg className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          <div className={`transition-height duration-300 faq ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
            <div className="py-4 px-5 text-gray-600 bg-gray-50" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
          </div>
        </div>
      </div>
  )
}

export default FaqItem