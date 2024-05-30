"use client";

import React, { useEffect } from "react";
import Menu from "./Menu";
import Landing from "./Landing";
import { Data } from "@/types/type";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const Main = ({ data }: { data: Data }) => {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <ParallaxProvider>
      <ReactLenis
        root
        // options={{
        //   lerp: isMobile ? 0.05 : 0.06,
        //   syncTouch: true,
        //   smoothTouch: true,
        // }}
      ></ReactLenis>
      <main className="main bg-black w-full min-h-screen text-white overflow-x-clip relative">
        <Cursor isGelly={true} cursorBackgrounColor="#fff" />

        <Menu about={data.user.about} />
        <Landing about={data.user.about} />
        <About about={data.user.about} />
        <Skills skills={data.user.skills} />
        <Services services={data.user.services} />
        <Projects projects={data.user.projects} />
        {/* <Timeline timeline={data.user.timeline} /> */}
        <Testimonial testimonials={data.user.testimonials} />
        <Contact social_handles={data.user.social_handles} />
      </main>
    </ParallaxProvider>
  );
};

export default Main;
