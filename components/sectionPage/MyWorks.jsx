import React from "react";
import Work from "../Work";
import { projectImages } from "@/static/index";

const MyWorks = () => {
  const workVariants = projectImages.map((project, index) => {
    return (
      <div
        key={index}
        className="w-full relative flex flex-col items-center justify-center text-center bg-black">
        <Work title={project.title} images={project.images} link={project.link} />
      </div>
    );
  });

  return workVariants;
};

export default MyWorks;
