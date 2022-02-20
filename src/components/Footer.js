import React from "react";
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2  sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/backslashflutter"
        >
          <FaGithub />
          <span class="sr-only">GitHub</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2  sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/backslashflutter"
        >
          <FaYoutube />
          <span class="sr-only">YoutTube</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2  sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/backslashflutter"
        >
          <FaTwitter />
          <span class="sr-only">Twitter</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2  sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/backslashflutter"
        >
          <FaEnvelope />
          <span class="sr-only">Email</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
          <p className="text-black mb-4">
              Made with <span className="mr-2" role="link" aria-label="heart">💝</span> by  <a className="text-blue-500 hover:underline" href="mailto:papu.team7@gmail.com">Laxmidhar Moharana</a>
          </p>
      </div>
    </div>
  );
}

export default Footer;
