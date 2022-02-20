import React from "react";
// import {scrollIntoView} from 'scroll-into-view'
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey👋
      </p>
      <p className="text-base text-center leading-relaxed mt-4">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s
      </p>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500"></FaChevronDown>
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
