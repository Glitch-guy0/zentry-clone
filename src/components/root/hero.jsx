"use client";

import { useState } from "react";

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  {
    /* 1 => 4 (0 -> 3 + 1) */
  }
  const [NextVideoIndex, setNextVideoIndex] = useState(2);
  function videoUpdate() {
    setCurrentVideoIndex(NextVideoIndex);
    setNextVideoIndex(((NextVideoIndex + 1) % 3) + 1);
  }
  const videoUrl = (num) => `/videos/hero-${num}.mp4`;
  return (
    <main className="min-h-dvh w-screen relative">
      {/* root animation */}
      <video
        src={videoUrl(currentVideoIndex)}
        className="absolute top-0 left-0 object-cover object-center size-full"
        muted
        autoPlay
        loop
      />
      <div className="group z-10 absolute absolute-center w-1/4 aspect-square min-w-[200px] rounded overflow-hidden">
        {/* mini video animation */}
        <video
          src={videoUrl(NextVideoIndex)}
          muted
          autoPlay
          loop
          onClick={videoUpdate}
          className="absolute absolute-center object-center size-9/12 opacity-0 group-hover:opacity-100 group-hover:size-full object-cover transition-all duration-500 ease-in rounded"
        />
      </div>
      {/* <div className="relative z-40 h-dvh w-dvw pointer-events-none text-blue-75"> */}
        {/* this is above all animations */}
        <div className="absolute z-40 text-white special-font top-5 left-6">
          {/* top content */}
          <h1 className="hero-heading uppercase">redefi<b>n</b>e</h1>
          <p className=" mb-5 font-robert-regular secondary-heading ">Enter the Metagame Layer <br/> Unleash the Play Economy</p>
        </div>
        <div className="absolute z-40 text-white special-font bottom-5 right-5">
          {/* bottom content */}
          <h1 className="uppercase special-font hero-heading">g<b>a</b>mi<b>n</b>g</h1>
        </div>
      {/* </div> */}
    </main>
  );
}
