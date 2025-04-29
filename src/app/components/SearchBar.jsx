"use client";

import { useState } from "react";

const searchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <form action="/search" method="GET" className="flex">
      <input
        type="text"
        name="q"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Søg Title..."
        className="border border-gray-300 bg-transparent rounded-l-3xl px-4 py-2"
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-600 text-white px-4 py-2 rounded-r-3xl"
      >
        Søg
      </button>
    </form>
  );
};

export default searchBar;
