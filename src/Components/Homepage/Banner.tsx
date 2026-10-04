import React from "react";
import HeroImg from "../../assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="my-12 ">
      <div className="hero bg-[#15171D] min-h-120 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            alt="Hero Image"
            src={HeroImg}
            className="max-w-sm"
          />
          <div className="text-center lg:text-left">
            <p className="text-xs text-[#C2F800] mb-3">WORKOUT LIBRARY</p>
            <h1 className="text-5xl font-bold text-white">
              TRAIN WITH INTENT. LOG <br /> EVERY SET.
            </h1>
            <p className="py-6 lg:w-6/10 text-sm text-[#9CA3AF]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>
            <button className="btn bg-[#C2F800] font-bold text-black rounded-lg">
              <a href="#library">BROWSE WORKOUTS</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
