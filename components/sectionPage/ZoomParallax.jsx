import { experience, skills } from "@/static/index";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { BsArrowDown } from "react-icons/bs";

const ZoomParallax = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale200 = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const elements = [
    {
      child: (
        <div className="w-full h-full relative flex flex-col items-center justify-center text-center">
          <motion.div
            style={{ opacity: scrollYProgress, borderRadius: scale200 }}
            className={`absolute top-0 left-0 bg-black w-full h-full`}></motion.div>
          <h2 className="animate-pulse text-4xl">My works</h2>
          <motion.div style={{ opacity: opacity }} className="relative top-10">
            <BsArrowDown className="text-xl animate-bounce" />
          </motion.div>
        </div>
      ),
      scale: scale4,
    },
    {
      child: (
        <div className="h-full flex items-center justify-center text-2xl xl:text-4xl font-extrabold text-accent">
          6+ лет опыта
        </div>
      ),
      scale: scale5,
    },

    {
      child: (
        <div className="w-full h-full flex flex-wrap gap-2 content-center items-center justify-center">
          {skills.map((item, index) => (
            <div key={index} alt={item.title}>
              <div className={`flex gap-4 flex-wrap xl:w-[90%]`}>
                <div className="text-4xl group">{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
      ),
      scale: scale6,
    },
    {
      child: (
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center justify-center">
          {experience.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center ">
              <div className="font-light mb-2 md:mb-0">{item.title}</div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
            </div>
          ))}
        </div>
      ),
      scale: scale5,
    },
    {
      child: <div className="flex flex-1 xl:gap-x-6"></div>,
      scale: scale6,
    },
    {
      child: (
        <div className="relative flex items-center justify-center h-full gap-2">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            <CountUp start={0} end={100} duration={5} /> +
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
            Довольных клиентов
          </div>
        </div>
      ),
      scale: scale9,
    },
    {
      child: (
        <div className="w-full h-full flex items-center justify-center px-2">
          6 лет назад я выбрал путь frontend разработчика. С тех пор, я тружусь
          удаленно. Работаю над цифровыми продуктами для бизнеса и
          потребительского рынка.
        </div>
      ),
      scale: scale8,
    },
  ];

  return (
    <div className="">
      <div ref={container} className="h-[300vh] relative">
        <div className="sticky overflow-hidden top-0 h-screen bg-gradient-to-b from-[#141226] via-black/50 to-black/40 translate-z-0">
          {elements.map(({ child, scale }, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale }}
                className="w-full h-full top-0 absolute flex items-center justify-center elementImage">
                <div className="relative w-[25vw] h-[25vw] overflow-hidden">
                  {child}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ZoomParallax;
