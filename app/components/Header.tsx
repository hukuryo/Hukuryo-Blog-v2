'use client';

import Link from 'next/link';
import { FaBook, FaLaptopCode, FaGamepad, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "./ui/button";
import { ModeToggle } from './toggle';
import { HumburgerMenu } from "./HamburgerMenu";

export function Header() {

  return (
    <header>
      <div className="shadow-lg lg:flex lg:justify-center lg:items-center h-20 border border-gray-200 dark:border-gray-600 dark:bg-gray-700">
        <div className="items-center justify-between hidden lg:flex w-full mx-5">
          <div className='flex items-center'>
            <div className="font-bold text-2xl mb-1">
              <Link href="/" className="hover:opacity-70">
                Hukuryo-no-Blog
              </Link>
            </div>
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
                target="blank"
              >
                <FaXTwitter />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="mx-3">
              <Link
                href="https://github.com/hukuryo"
                target="blank"
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
                  target="blank"
                >
                  <FaXTwitter />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="mx-3">
                <Link
                  href="https://github.com/hukuryo"
                  target="blank"
                >
                  <FaGithub />
                </Link>
              </Button>
              <ModeToggle />
              <HumburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
