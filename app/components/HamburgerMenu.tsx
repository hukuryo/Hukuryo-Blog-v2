import { Button } from "./ui/button"
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { IoIosMenu } from "react-icons/io";
import { FaBook, FaGamepad, FaHome, FaLaptopCode, FaUser } from "react-icons/fa";

export function HumburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="ml-3">
            <IoIosMenu className="h-[1.0rem] w-[1.2rem]"/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>MENU</SheetTitle>
        </SheetHeader>
        <nav className="text-left fixed z-10 sm:w-2/5 w-3/5 h-screen flex flex-col justify-start pt-2 ease-linear duration-300">
            <Link
              href="/"
              className="text-gray-700 py-2 mt-4 hover:bg-gray-200 transition duration-300"
            >
              <FaHome className="mr-2 inline mb-1" />
              トップページ
            </Link>
            <Link
              href="/tech"
              className="text-gray-700 py-2 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaLaptopCode className="mr-2 inline mb-1" />
              技術記事
            </Link>
            <Link
              href="/books"
              className="text-gray-700 py-2 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaBook className="mr-2 inline mb-1" />
              読んだ本
            </Link>
            <Link
              href="/hobby"
              className="text-gray-700 py-2 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaGamepad className="mr-2 inline mb-1" />
              趣味
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 py-2 mt-7 hover:bg-gray-200 transition duration-300"
            >
              <FaUser className="mr-2 inline mb-1" />
              プロフィール
            </Link>
        </nav>
        
      </SheetContent>
    </Sheet>
  )
}
