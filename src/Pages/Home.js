import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import Certificates from './Certificates';

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
   <main className="container m-auto max-width section md:flex justify-between items-start">
  <div className="mt-[5px]">
    <h1
      ref={h11}
      className="text-2xl text-dark-heading dark:text-light-heading md:text-xl xl:text-xl xl:leading-tight "
    >
      Hi,👋 My Name is<br />
    </h1>
    <h1
      ref={h12}
      className="text-2xl bg-clip-text bg-gradient text-transparent md:text-xl xl:text-xl xl:leading-tight font-bold"
    >
      {name}
    </h1>
    <h2
      ref={h13}
      className="text-2xl text-dark-heading dark:text-light-heading md:text-xl xl:text-xl xl:leading-tight "
    >
      {tagline}
      <h2 className="text-lg text-gray-600 mt-2 font-semibold">
  My Moto – {personalDetails.moto}
</h2>

    </h2>
  </div>

  <div className="mx-auto md:ml-auto md:mr-0 mt-[10px]">
    <img
      ref={myimageref}
      className="w-[300px] md:ml-auto "
      src={img}
      alt="Naveena"
    />
  </div>
</main>


  );
}

export default Home;
