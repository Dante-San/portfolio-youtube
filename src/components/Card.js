import React from "react";
import profile from "../images/memoji.png";
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";
function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile picture"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">
            Laxmidhar Moharana
          </p>
          <p className="text-xl sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Backend Developer / YouTuber
          </p>
          <div className="flex align-center justify-center mt-4"></div>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2  sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/dante-san"
              target="_blank"
              rel="noopner noreferer"
            >
              <FaGithub />
              <span class="sr-only">GitHub</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2  sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
              href="https://youtube.com/saiyanea"
              target="_blank"
              rel="noopner noreferer"
            >
              <FaYoutube />
              <span class="sr-only">YoutTube</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2  sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://twitter.com/sledgemaster2"
              target="_blank"
              rel="noopner noreferer"
            >
              <FaTwitter />
              <span class="sr-only">Twitter</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2  sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/backslashflutter"
              target="_blank"
              rel="noopner noreferer"
            >
              <FaEnvelope />
              <span class="sr-only">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
