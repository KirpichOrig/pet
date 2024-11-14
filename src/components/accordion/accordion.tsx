"use client"

import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-700">
          <button
            className="w-full text-left p-4 text-white font-semibold bg-gray-800 hover:bg-gray-700 transition"
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-900 text-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
