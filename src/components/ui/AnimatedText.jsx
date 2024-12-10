"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";


export default function AnimatedText({text, className}){
  gsap.registerPlugin(ScrollTrigger);

  const wordList = useRef([]);
  const titleBox = useRef(null);

  useGSAP(() => {
    gsap.set(wordList.current, {transformOrigin: "left center"});
    gsap.from(wordList.current, {
      top: "50px",
      left: "10px",
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: titleBox.current,
        start: "top bottom-=10%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return(
  <div className={clsx("animated-title text-center", className)} ref={titleBox}>
    {
      text.split(" ").map((word, index) => {
        // adding space between words
        word = word+" "
        return (
          <span className="animated-word text-black relative" key={index} ref={(thisElem) => {wordList.current.push(thisElem)}} dangerouslySetInnerHTML={{__html: word}}/> 
        )
      })
    }
  </div>);
}