'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const SearchInputForm = () => {
  const [inputValue, setInputText] = useState('');

  return (
    <>
      <form className="flex items-center mb-10">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputText(e.target.value)}
          className="rounded-md p-2 border-secondary-300 border focus:ring-opacity-50"
          placeholder="記事を検索"
        />
        <Link href={`/search?s=${inputValue}`}>
          <button className="bg-blue-500 px-4 py-3 hover:opacity-80 bg-primary-500 hover:bg-primary-600 text-white rounded-md">
            <FaMagnifyingGlass />
          </button>
        </Link>
      </form>
    </>
  );
};
