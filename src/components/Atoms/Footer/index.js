import React from "react";
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer className="text-white py-12"> {/* className */}
        <div className="container mx-auto flex items-center justify-between px-10"> {/* className */}
          <div>
            <p>&copy; 2023 Fernando Julian. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4"> {/* className */}
              <li>
                <a
                  href="https://github.com/nandocoeg2"
                  className="flex items-center gap-1 hover:text-gray-300" // className
                >
                  <BsGithub />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fernando-julian/"
                  className="flex items-center gap-1 hover:text-gray-300" // className
                >
                  <BsLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https:///www.twitter.com/nandocoeg"
                  className="flex items-center gap-1 hover:text-gray-300" // className
                >
                  <BsTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discordapp.com/users/357176745528393728"
                  className="flex items-center gap-1 hover:text-gray-300" // className
                >
                  <BsDiscord />
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
