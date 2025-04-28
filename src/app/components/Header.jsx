"use client";

import { BsBasket } from "react-icons/bs";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <div className="py-3 top-0 bg-transparent z-10 relative flex justify-between items-center px-4">
      <nav className="flex flex-col mx-2 sm:flex-row justify-between items-center px-4 gap-4 sm:gap-0 text-black">
        <ul className="flex flex-col sm:flex-row sm:gap-20 text-lg font-medium">
          <li className="cursor-pointer hover:text-pink-500">
            <Link href="/">Forside</Link>
          </li>
          <li className="cursor-pointer hover:text-pink-500">
            <Link href="/products">Produkter</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end">
        <CartIcon />
      </div>
    </div>
  );
};

export default Header;
