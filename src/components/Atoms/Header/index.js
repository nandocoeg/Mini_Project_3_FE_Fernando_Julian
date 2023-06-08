import React from "react";
import { BsFillHouseFill } from "react-icons/bs";

function Header() {
  return (
    <>
      <nav class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-transparent">
        <div class="flex items-center bg-black p-2 rounded-lg">
          <a href="/">
            <h1 class="px-2 font-bold text-3xl bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text">
              Bintang Panas
            </h1>
          </a>
        </div>
        <ul class="flex items-center space-x-4 bg-black p-2 rounded-lg">
          <li>
            <a
              href="#"
              class="flex items-center gap-2 text-white hover:text-blue-500 transition"
            >
              <BsFillHouseFill />
              Home
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-blue-500 transition">
              Favourite
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-blue-500 transition">
              Watchlist
            </a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-blue-500 transition">
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
