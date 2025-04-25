"use client";
import Link from "next/link";

const DropdownMenu = ({ title, items }) => {
  return (
    <li className="group relative cursor-pointer hover:text-pink-500">
      {title}
      <ul className="absolute top-6 left-0 hidden group-hover:flex flex-col gap-2 bg-white p-4 shadow-lg border rounded-md z-10 min-w-[180px]">
      </ul>
    </li>
  );
};

export default DropdownMenu;