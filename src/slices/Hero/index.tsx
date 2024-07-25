"use client";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import { SliceComponentProps } from "@prismicio/react";
import { Content, KeyTextField } from "@prismicio/client";
import Bounded from "@/app/components/Bounded";
import Shapes from "./Shapes"


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
     const tl = gsap.timeline()
        tl.fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(2,0.7)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.5,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);


const renderLetters = (name: KeyTextField, key: string)=> {
  if(!name) return;
  return name.split("").map((letter, index) => (
    <span key={index}
    className={`name-animation name-animation-${key}-index inline-block opacity-1 `}
  >
      {letter}
    </span>
  ));




};



  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >

      
<div className="grid min-h-[90vh] grid-cols-1 items-center md:grid-cols-2">

  <Shapes/>
        
        <div className="col-start-1 md:row-start-1">
          <h1  className="mb-9 text-[clamp(3rem,20vmin,20rem)] font-bold leading-none tracking-tighter"
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
    <span className="text-red-700 md:text-15xl "> {renderLetters(slice.primary.first_name, "first")}  </span>
  
    <span className="-mt-[.1em] block text-rose-300 text-8xl md:text-8xl  "> {renderLetters(slice.primary.last_name, "last")} </span> 
    
   
    </h1>
    <span className=" job-title block bg-gradient-to-tr from-red-700 via-yellow-200 to-yellow-700 
    bg-clip-text text-4xl font-bold uppercase tracking-[.2em] text-transparent opacity-100
     md:text-4xl">{slice.primary.tag_line}
    </span>
    </div>
    </div>
      
    </Bounded>
  );
};

export default Hero;
