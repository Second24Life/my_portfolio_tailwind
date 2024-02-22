import React, { useEffect, useRef, useState } from "react";
import Column from "./Column";
import { useScroll, useTransform } from "framer-motion";

function Work({ title, images, link }) {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.7]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.2]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="bg-black">
      <a href={link} target="_blank" referrerPolicy="no-referrer">
        <div className="h-[50vh] w-screen flex justify-center items-center text-6xl uppercase">
          {title}
        </div>

        <div className="h-[175vh] w-screen overflow-hidden">
          <div
            ref={gallery}
            className="relative -top-[12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
            <Column images={[images[0], images[1], images[2]]} y={y} />
            <Column images={[images[2], images[3], images[5]]} y={y2} />
            <Column images={[images[4], images[5], images[8]]} y={y3} />
            <Column images={[images[6], images[7], images[0]]} y={y4} />
          </div>
        </div>

        {/* <div className="h-[50vh] w-screen flex justify-center items-center text-6xl">
        OXWE
      </div> */}
      </a>
    </section>
  );
}

export default Work;
