"use client";

import { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
        <form action="/search" method="GET" className="flex">
          <input
            type="text"
            name="q"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Søg Title..."
            className="border border-gray-300 bg-transparent rounded-l px-4 py-2"
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-600 text-white px-4 py-2 rounded-r"
          >
            Søg
          </button>
        </form>
        
        <CartIcon />
      </nav>
    </header>
  );
};

export default Header;
