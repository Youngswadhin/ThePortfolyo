/* eslint-disable @next/next/no-img-element */
import { Project } from "@/types/type";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useClientMediaQuery } from "./hooks/userClientMediaQuery";

const Projects = ({ projects }: { projects: Project[] }) => {
  const isMobile = useClientMediaQuery("(max-width: 600px)");
  return (
    <section
      style={
        isMobile
          ? { height: `${(projects.length + 1) * 50}vh` }
          : { height: `${(projects.length + 1) * 100}vh` }
      }
      className={`h-[${projects.length * 50}vh] md:h-[${
        projects.length * 100
      }vh] w-full min-h-screen relative items-center justify-center`}
      id="projects"
    >
      <div className="items w-full md:w-[80%] absolute flex flex-col gap-10 items-center justify-center">
        {projects.map((project, i) => (
          <ProjectCard i={i} project={project} key={i} />
        ))}
      </div>
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none">
        <div className="heading text-[clamp(50px,8vw,150px)] text-white font-bold ">
          PROJECTS
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, i }: { project: Project; i: number }) => {
  return i % 2 == 0 ? (
    <Parallax scale={[1, 0.8]}>
      <div className="h-[50vh] md:h-screen w-full flex gap-3 md:gap-6 items-center justify-end">
        <div className="wrapper w-[90%] md:w-[70%] translate-x-[-30%] aspect-[2/1.3] relative">
          <img
            src={project.image.url}
            alt=""
            className="w-full h-full absolute -z-10"
          />
          <div className="details flex flex-col gap-2 items-center justify-center w-full h-full p-[10%] text-center z-[100] bg-black/70 opacity-0 hover:opacity-100 duration-300">
            <div className="heading text-3xl md:text-4xl font-medium">{project.title}</div>
            <div className="desc text-xs md:text-sm line-clamp-3">
              {project.description}
            </div>
            <div className="stack flex gap-2 flex-wrap items-center justify-center">
              {project.techStack.map((stack, ind) => (
                <span className="px-2 rounded-full bg-white/30 text-xs md:text-sm" key={ind}>
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  ) : (
    <Parallax scale={[1, 0.8]}>
      <div className="h-[50vh] md:h-screen w-full flex gap-3 md:gap-6 items-center justify-end">
        <div className="wrapper w-[90%] md:w-[70%] translate-x-[30%] aspect-[2/1.3] relative">
          <img
            src={project.image.url}
            alt=""
            className="w-full h-full absolute -z-10"
          />
          <div className="details flex flex-col gap-2 items-center justify-center w-full h-full p-[10%] text-center z-[100] bg-black/70 opacity-0 hover:opacity-100 duration-300">
            <div className="heading text-3xl md:text-4xl font-medium">{project.title}</div>
            <div className="desc text-xs md:text-sm line-clamp-3">
              {project.description}
            </div>
            <div className="stack flex gap-2 flex-wrap items-center justify-center">
              {project.techStack.map((stack, ind) => (
                <span className="px-2 rounded-full bg-white/30 text-xs md:text-sm" key={ind}>
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Projects;
