"use client";

import { useRef } from "react";
import AnimatedText from "./ui/AnimatedText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  const zoomImage = useRef(null);

  useGSAP(() => {
    gsap.set(zoomImage.current, {
      clipPath: "polygon(40% 20%, 60% 20%, 60% 80%, 40% 80%)",
      scale: 1.5
    });
    gsap.to(zoomImage.current,{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1,
      scrollTrigger: {
        trigger: zoomImage.current,
        start: "center center",
        end: "+=200%",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
  });

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center gap-5">
      <h1 className="uppercase font-general text-sm md:text-[10px] font-bold mt-10">
        welcome to Zentry
      </h1>
      <AnimatedText
        text="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure"
        className="mt-10"
      />
      <div className="relative h-svh w-svw origin-top">
        <div ref={zoomImage} className="w-screen h-screen overflow-hidden">
          <img src="images/about.webp" alt="" className="w-svw h-svh"/>
        </div>
      </div>
    </div>
  );
}
