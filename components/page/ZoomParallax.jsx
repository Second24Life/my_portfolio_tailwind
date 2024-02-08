import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Picture1 from "../../public/bg-explosion.png";
import Picture2 from "../../public/thumb1.jpg";
import Picture3 from "../../public/thumb2.jpg";
import Picture4 from "../../public/thumb3.jpg";
import Picture5 from "../../public/thumb4.jpg";

const ZoomParallax = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture3, scale: scale5 },
    { src: Picture2, scale: scale6 },
    { src: Picture4, scale: scale8 },
    { src: Picture5, scale: scale9 },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky overflow-hidden top-0 h-screen">
        {/* <motion.div
          style={{ scale }}
          className="w-full h-full top-0 absolute flex items-center justify-center">
          <div className="relative w-[25vw] h-[25vh]">
            <Image
              src={Picture1}
              fill
              alt="image"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div> */}
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="w-full h-full top-0 absolute flex items-center justify-center elementImage">
              <div className="relative w-[25vw] h-[25vh] imageContainer">
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomParallax;
