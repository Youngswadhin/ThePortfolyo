/* eslint-disable @next/next/no-img-element */
import { About } from "@/types/type";
import { motion } from "framer-motion";
import React from "react";
import { TextGenerateEffect } from "./ui/text-effect";
import { Parallax } from "react-scroll-parallax";

const Landing = ({ about }: { about: About }) => {
  return (
    <section className="w-full  relative min-h-[80vh] flex p-6 items-center justify-center flex-wrap" id="home">
      <Parallax speed={30}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: "easeIn" } }}
          className="text-[clamp(50px,8vw,150px)] w-full font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-black md:-ml-[30%] mt-[60%] md:mt-[15%] leading-none"
          data-cursor-background-image={about.avatar.url}
        >
          {about.name}
        </motion.h1>
        <motion.h3
          // initial={{ opacity: 0, translateY: "100px" }}
          // animate={{
          //   opacity: 1,
          //   translateY: "0px",
          //   transition: { ease: "easeIn" },
          // }}
          className="font-semibold text-xl w-full flex text-white justify-start md:-ml-[30%]"
        >
          {about.title}
        </motion.h3>
      </Parallax>
      <Parallax scale={[1, 1.2]}>
        <img
          src={about.avatar.url}
          alt=""
          className="h-[50vh] md:h-[70vh] aspect-[.9/1.2] mb-10 md:mb-0"
          data-cursor-exclusion
        />
      </Parallax>
    </section>
  );
};

export default Landing;
