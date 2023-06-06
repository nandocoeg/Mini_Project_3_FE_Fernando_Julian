import React from "react";
import { BsFillHouseFill } from "react-icons/bs";

function Header() {
  return (
    <>
      <nav class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-transparent">
        <div class="flex items-center bg-black p-2 rounded-lg">
          <h1 class="px-2 text-white font-bold text-3xl">
            <span className="text-yellow-400">Bintang </span>Panas
          </h1>
        </div>
        <ul class="flex items-center space-x-4 bg-black p-2 rounded-lg">
          <li>
            <a
              href="#"
              class="flex items-center gap-2 text-white hover:text-gray-300"
            >
              <BsFillHouseFill />
              Home
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
