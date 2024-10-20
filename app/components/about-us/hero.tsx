import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const AboutUsHero = () => {
  return (
    <main className="relative max-h-[100vh] flex flex-col bg-gradient-to-b from-white via-gray-50/50 to-white">
      <img
        src="about-us/about-us1.jpg"
        alt="Our Teamwork"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative mx-auto mt-24 w-3/4 flex flex-col text-white items-center justify-center h-[100vh] space-y-16">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold text-center leading-tight tracking-tight">
          Everything You Need to Build a{" "}
          <span className="text-orange-500 font-bold relative">
            Serene
            <span className="absolute -bottom-0 left-0 w-full h-[0.11rem] bg-orange-500"></span>
          </span>
          <span className="text-gray-300"> and Engaging Blog</span>
        </h1>

        <div className="flex flex-col items-end justify-center">
          <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic max-w-3xl text-center leading-relaxed">
            "At Serene, we provide thoughtful articles, insights, and
            inspiration to help you cultivate a peaceful and purposeful
            lifestyle."
          </blockquote>
        </div>

        <button className="group flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-orange-500 hover:scale-110 transition-all duration-500 bg-white rounded-xl shadow-lg ">
          Learn More
          <BiRightArrowAlt className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </main>
  );
};

export default AboutUsHero;
