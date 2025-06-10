import React from "react";
import { BsFillHouseFill } from "react-icons/bs";

function Header() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-transparent"> {/* className */}
        <div className="flex items-center bg-black p-2 rounded-lg"> {/* className */}
          <a href="/">
            <h1 className="px-2 font-bold text-3xl bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text"> {/* className */}
              Bintang Panas
            </h1>
          </a>
        </div>
        <ul className="flex items-center space-x-4 bg-black p-2 rounded-lg"> {/* className */}
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-white hover:text-blue-500 transition" // className
            >
              <BsFillHouseFill />
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-500 transition"> {/* className */}
              Favourite
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-500 transition"> {/* className */}
              Watchlist
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-500 transition"> {/* className */}
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
