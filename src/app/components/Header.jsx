"use client";

import { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";

const Header = () => {

  return (
    <header className=" bg-tranparent shadow-b-md py-4">
      <nav className="flex justify-between items-center mx-8 px-4">
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-gray-600">
              Forside
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-600">
              Produkter
            </Link>
          </li>
        </ul>
        <SearchBar />
        <CartIcon />
      </nav>
    </header>
  );
};

export default Header;
