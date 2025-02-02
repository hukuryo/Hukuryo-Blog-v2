'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const SearchInputForm = () => {
  const [inputValue, setInputText] = useState('');

  return (
    <>
      <form className="flex items-center mb-10 bg-white shadow-lg">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-grow px-4 py-3 text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="記事を検索"
        />
        <Link href={`/search?s=${inputValue}`}>
          <button
            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            aria-label="Search"
          >
            <FaMagnifyingGlass className="w-5 h-5" />
          </button>
        </Link>
      </form>
    </>
  );
};
