"use client";

import { useRef } from "react";
import AnimatedText from "./ui/AnimatedText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./svg.css";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  const triggerElement = useRef(null);
  const imageFrame = useRef(null);
  const imageBottom = useRef(null);

  // Trigger element
  const scroller = {
    trigger: triggerElement.current,
    start: "top top",
    end: "+=200%",
    scrub: 1,
    markers: true,
  };

  useGSAP(() => {
    gsap.to(imageBottom.current, {
      scale: 1,
      transform: "translateY(0px)",
      scrollTrigger: {
        trigger: triggerElement.current,
        start: "top top",
        end: "+=200%",
        scrub: 1,
      }
    });

    gsap.to(imageFrame.current, {
      clipPath: "inset(0% 0% round 0px)",
      scrollTrigger: {
        trigger: triggerElement.current,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        pinSpacing: true
      }
    })
  });

  return (
    <div className="min-h-screen w-full text-center items-center gap-5">
      {/******************** working fine ********************** */}
      <h1 className="uppercase font-general text-sm md:text-[10px] font-bold mt-10">
        welcome to Zentry
      </h1>
      <AnimatedText
        text="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure"
        className="mt-10"
      />
      {/* ******************** end working fine ********************** */}

      <div
        ref={triggerElement}
        className="relative h-dvh md:h-dvh w-screen"
      >
        <div ref={imageFrame} className="size-full sm:clipPath-lg clipPath-sm bg-blue-500 mx-auto">
          <img
            ref={imageBottom}
            src="images/about.webp"
            alt=""
            className="size-full absolute object-cover object-center scale-[1.3] transform translate-y-[90px]"
          />
        </div>
        
      </div>
    </div>
  );
}
