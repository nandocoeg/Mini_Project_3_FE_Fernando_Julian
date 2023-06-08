import React from "react";
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer class=" text-white py-12">
        <div class="container mx-auto flex items-center justify-between px-10">
          <div>
            <p>&copy; 2023 Fernando Julian. All rights reserved.</p>
          </div>
          <div>
            <ul class="flex space-x-4">
              <li>
                <a
                  href="https://github.com/nandocoeg2"
                  class="flex items-center gap-1 hover:text-gray-300"
                >
                  <BsGithub />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fernando-julian/"
                  class="flex items-center gap-1 hover:text-gray-300"
                >
                  <BsLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https:///www.twitter.com/nandocoeg"
                  class="flex items-center gap-1 hover:text-gray-300"
                >
                  <BsTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discordapp.com/users/357176745528393728"
                  class="flex items-center gap-1 hover:text-gray-300"
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
