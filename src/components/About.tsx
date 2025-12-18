import React from "react";
import SectionIntro from "./shared/SectionIntro";
import { Button } from "./ui/button";

function About() {
  return (
    <div className="mt-28">
      <SectionIntro
        heading="Transforming complexity into effortless design"
        subHeading="About"
      />
      <p>
        I’m a designer and front-end developer passionate about transforming
        complex problems into clear, intuitive digital experiences. I believe
        great design isn’t just about how something looks—it’s about how it
        works. My approach blends creativity with strategy, ensuring every
        interface not only looks good but also feels effortless to use.
      </p>
      <p>
        Over the past few years, I’ve worked across web, brand, and product
        design—bringing ideas to life through modern tools like Figma, React,
        and Tailwind CSS. Whether it’s building a design system, crafting a
        responsive website, or refining the smallest detail in a button
        animation, I’m always driven by one goal: creating meaningful,
        human-centered design that makes technology feel simple.
      </p>

      <Button className="mt-4">Contact Me</Button>
    </div>
  );
}

export default About;
