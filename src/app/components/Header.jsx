"use client";

import { BsBasket } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-2 top-0 w-full bg-black shadow z-1000 relative">
      <nav className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-4 gap-4 sm:gap-0 text-white">
        <ul className="flex flex-col sm:flex-row sm:gap-20 text-lg font-medium">
          <li className="cursor-pointer hover:text-pink-500">
            <Link href="/">Forside</Link>
          </li>
          <li className="cursor-pointer hover:text-pink-500">
            <Link href="/products">Produkter</Link>
          </li>
        </ul>
        <BsBasket className="text-2xl cursor-pointer hover:text-pink-500" />
      </nav>
    </div>  
  );
};

export default Header;
