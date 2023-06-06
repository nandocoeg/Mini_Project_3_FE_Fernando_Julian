import React from "react";
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer class=" text-white py-12">
        <div class="container mx-auto flex items-center justify-between px-10">
          <div>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
          <div>
            <ul class="flex space-x-4">
              <li>
                <a href="#" class="flex items-center gap-1 hover:text-gray-300">
                  <BsGithub />
                  Github
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-1 hover:text-gray-300">
                  <BsLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-1 hover:text-gray-300">
                  <BsTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-1 hover:text-gray-300">
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
