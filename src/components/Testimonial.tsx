import React from "react";
import { CardStack } from "./ui/card-stack";
import { Testimonial as TestimonialType } from "@/types/type";
import { Parallax } from "react-scroll-parallax";

const Testimonial = ({ testimonials }: { testimonials: TestimonialType[] }) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative" id="testimonial">
      <Parallax scale={[1,1.5]} className="header absolute text-[clamp(50px,11vw,140px)] text-white font-semibold">Testimonial</Parallax>
      <CardStack
        items={testimonials.map((e) => {
          return {
            id: 0,
            name: e.name,
            designation: e.position,
            content: (
              <p>
                {e.review}
                {/* These cards are amazing,{" "} */}
                {/* <Highlight>I want to use them</Highlight> in my project. Framer
                motion is a godsend ngl tbh fam 🙏 */}
              </p>
            ),
          };
        })}
      />
    </section>
  );
};

export default Testimonial;
