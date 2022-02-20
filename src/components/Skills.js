import React from "react";
import { SiFlutter, SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
        Tech I Use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 m-6 p-10 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiFlutter color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-2xl font-semibold text-center">Flutter</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 overflow-hidden bg-white shadow-2xl rounded-xl">
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-2xl font-semibold text-center">React</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 overflow-hidden bg-white shadow-2xl rounded-xl">
          <FiFigma color="orange" className="mx-auto text-4xl" />
          <p className="mt-6 text-2xl font-semibold text-center">Figma</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
          <p className="mt-6 text-2xl font-semibold text-center">JavaScript</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiTailwindcss color="#00C0f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-2xl font-semibold text-center">
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
