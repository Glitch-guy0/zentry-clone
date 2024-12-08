"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);
  const totalVideos = 4;
  const [clicked, setClicked] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [NextVideoIndex, setNextVideoIndex] = useState(2);
  const [loadingScreen , setLoadingScreen] = useState(true);

  // elemnts reference
  const currentVideo = useRef(null);
  const nextVideo = useRef(null);
  const page = useRef(null);

  // helper function ( to rotate video within limits)
  function videoUpdate() {
    // TODO: imporvement required
    setCurrentVideoIndex(NextVideoIndex);
    setNextVideoIndex((NextVideoIndex % totalVideos) + 1);
  }

  // set video url for tag (used for both current and next video ref)
  const videoUrl = (num) => `/videos/hero-${num}.mp4`;

  useEffect(() =>{
    setLoadingScreen(false);
  })

  // animations
  useGSAP(
    () => {
      // when clicked scale the video
      if (clicked) {
        gsap.to(nextVideo.current, {
          duration: 1,
          opacity: 1,
          // scale up the whole screen
          height: "100dvh",
          width: "100dvw",
          ease: "power1.inOut",
          // run this after the animation
          onComplete: () => {
            // change to the video
            videoUpdate();
            setClicked(false);
          },
        });
      }
    },
    {
      // dependencies used to trigger the animation
      dependencies: [clicked],
      // after animating revert to the original state
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set(page.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      borderRadius: "0 0 0 0",
    });
    gsap.to(page.current, {
      clipPath: "polygon(20% 17%, 75% 20%, 82% 84%, 2% 98%)",
      borderRadius: "0 0 80% 30%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: page.current,
        start: "bottom bottom-=100",
        end: "bottom top",
        scrub: 1
      },
    });
  });

  return (
    <main className="min-h-svh w-screen relative">
      {/* laoding screen */}
      {loadingScreen && <LoadingScreen />}
      {/* root animation */}
      <div ref={page} className="h-full w-full absolute z-[10] overflow-hidden">
        <video
          ref={currentVideo}
          src={videoUrl(currentVideoIndex)}
          className="absolute top-0 left-0 object-cover object-center size-full"
          muted
          autoPlay
          loop
        />
        <div
          ref={nextVideo}
          className="group z-10 absolute absolute-center w-1/4 aspect-square min-w-[200px] rounded overflow-hidden"
        >
          {/* mini video animation */}
          <video
            src={videoUrl(NextVideoIndex)}
            muted
            loop
            onClick={() => {
              setClicked(true);
            }}
            className="absolute bg-transparent absolute-center object-center size-9/12 opacity-0 group-hover:opacity-100 group-hover:size-full object-cover transition-all duration-500 ease-in rounded"
          />
        </div>
        {/* this is above all animations */}
        <div className="absolute z-40 text-white special-font top-5 left-6">
          {/* top content */}
          <h1 className="hero-heading uppercase">
            redefi<b>n</b>e
          </h1>
          <p className=" mb-5 font-robert-regular secondary-heading ">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          {/* TODO:  have to place a button here (******************) */}
        </div>
        <div className="absolute z-40 text-white special-font bottom-5 right-5">
          {/* bottom content */}
          <h1 className="uppercase special-font hero-heading">
            g<b>a</b>mi<b>n</b>g
          </h1>
        </div>
      </div>
      <div className="absolute z-1 text-black special-font bottom-5 right-5">
        {/* bottom content */}
        <h1 className="uppercase special-font hero-heading">
          g<b>a</b>mi<b>n</b>g
        </h1>
      </div>
    </main>
  );
}



function LoadingScreen() {
  return (
    <div className="flex-center fixed z-[100] h-dvh w-screen overflow-hidden bg-violet-50" preload="auto">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
}