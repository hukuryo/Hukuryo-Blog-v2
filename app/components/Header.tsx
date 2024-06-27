'use client';

import { FaHome, FaBook, FaUser, FaLaptopCode, FaGamepad, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from './toggle';
import { Button } from "./ui/button";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className="shadow-lg lg:flex lg:justify-center lg:items-center h-20 border border-gray-200 dark:border-gray-600 dark:bg-gray-700">
        <div className="items-center justify-between hidden lg:flex w-full mx-5">
          <div className='flex items-center'>
            <h4 className="font-bold text-2xl mb-1">
              <Link href="/" className="hover:opacity-70">
                Hukuryo-no-Blog
              </Link>
            </h4>
            <div className='ml-5'>
              <Link
                href="/tech"
                className="text-sm px-3 ease-in-out duration-300 hover:opacity-70"
              >
                <FaLaptopCode className='inline mr-1 mb-1'/>
                技術記事
              </Link>
              <Link
                href="/books"
                className="text-sm px-3 ease-in-out duration-300 hover:opacity-70"
              >
                <FaBook className='inline mr-1 mb-1'/>
                読んだ本
              </Link>
              <Link
                href="/hobby"
                className="text-sm px-3 ease-in-out duration-300 hover:opacity-70"
              >
                <FaGamepad className='inline mr-1 mb-1'/>
                趣味
              </Link>
            </div>
          </div>
          <div>
            <Button variant="outline" size="icon">
              <Link
                href="https://twitter.com/hukuryo_"
              >
                <FaXTwitter />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="mx-3">
              <Link
                href="https://github.com/hukuryo"
              >
                <FaGithub />
              </Link>
            </Button>
            <ModeToggle />

          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex justify-between items-center h-full mt-6 mx-4">
            <Link href="/" className="font-bold text-2xl mt-0">
              <h1 className="font-bold text-2xl mt-0 hover:opacity-70">
                Hukuryo-no-Blog
              </h1>
            </Link>
            <div>
              <Button variant="outline" size="icon">
                <Link
                  href="https://twitter.com/hukuryo_"
                >
                  <FaXTwitter />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="mx-3">
                <Link
                  href="https://github.com/hukuryo"
                >
                  <FaGithub />
                </Link>
              </Button>
              <ModeToggle />
              <button
                onClick={handleMenuOpen}
                type="button"
                className="z-20 lg:hidden space-y-2 ml-5"
              >
                <div
                  className={
                    openMenu
                      ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out'
                      : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                  }
                />
                <div
                  className={
                    openMenu
                      ? 'opacity-0 transition duration-500 ease-in-out'
                      : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                  }
                />
                <div
                  className={
                    openMenu
                      ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out'
                      : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                  }
                />
              </button>
            </div>
          </div>
          <nav
            className={
              openMenu
                ? 'text-left fixed z-10 bg-slate-50 right-0 top-0 sm:w-2/5 w-3/5 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300'
                : 'fixed right-[-250%] ease-linear duration-300'
            }
          >
            <button
              onClick={handleMenuOpen}
              type="button"
              className="z-20 lg:hidden space-y-2 ml-5"
            >
              <div
                className={
                  openMenu
                    ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out'
                    : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                }
              />
              <div
                className={
                  openMenu
                    ? 'opacity-0 transition duration-500 ease-in-out'
                    : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                }
              />
              <div
                className={
                  openMenu
                    ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out'
                    : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                }
              />
            </button>
            <h5 className="mt-14 pl-3 bg-gray-500 text-white py-2.5">
              MENU
            </h5>
            <Link
              href="/"
              className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaHome className="mr-2 inline mb-1" />
              トップページ
            </Link>
            <Link
              href="/tech"
              className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaLaptopCode className="mr-2 inline mb-1" />
              技術記事
            </Link>
            <Link
              href="/books"
              className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaBook className="mr-2 inline mb-1" />
              読んだ本
            </Link>
            <Link
              href="/hobby"
              className="text-gray-700 py-2 pl-3 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaGamepad className="mr-2 inline mb-1" />
              趣味
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 py-2 pl-3 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaUser className="mr-2 inline mb-1" />
              プロフィール
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
