'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";

import { animateScroll as scroll } from 'react-scroll';

export function ScrollUp() {
  // スクロールアップボタンを表示、非表示させるためのState
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className={`fixed bottom-6 right-6 z-50 bg-gray-500 text-white px-5 py-5 rounded-full duration-200 hover:opacity-60 cursor-pointer transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={scrollToTop}
      >
        <FaChevronUp/>
      </button>
    </div>
  );
}
