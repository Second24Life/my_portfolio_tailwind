import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import CountUp from "react-countup";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiRedux,
  SiGit,
  SiTypescript,
  SiDocker,
  SiJira,
  SiTrello,
  SiThreedotjs,
} from "react-icons/si";

const styleIcons =
  "group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150  aspect-square rotate-0 group-hover:-rotate-[360deg] hover:fill-accent group-hover:-translate-y-6 group-hover:-skew-y-6 group-hover:skew-x-6";

//  data
const aboutData = [
  {
    title: "Умения",
    info: [
      {
        icons: [
          <FaHtml5 className={styleIcons} />,
          <FaCss3 className={styleIcons} />,
          <FaJs className={styleIcons} />,
          <SiTypescript className={styleIcons} />,
          <FaReact className={styleIcons} />,
          <SiNextdotjs className={styleIcons} />,
          <SiFramer className={styleIcons} />,
          <SiThreedotjs className={styleIcons} />,
          <SiRedux className={styleIcons} />,

          <SiGit className={styleIcons} />,
          <SiDocker className={styleIcons} />,
          <SiJira className={styleIcons} />,
          <SiTrello className={styleIcons} />,
        ],
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Frontend developer - Antifreeze studio",
        stage: "2023 - н.в.",
      },
      {
        title: "Frontend developer - Freelance",
        stage: "2020 - 2023",
      },
      {
        title: "Веб-разработчик - Skyweb24",
        stage: "2018 - 2019",
      },
    ],
  },
  {
    title: "Образование",
    info: [
      {
        title: "Программная инженерия - СФУ, Красноярск",
        stage: "2019",
      },
    ],
  },
];

const ZoomParallax = () => {
  const container = useRef(null);

  const [index, setIndex] = useState(0);

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

  const elements = [
    {
      child: (
        <div className="w-full h-full bg-gray-500 flex items-center justify-center">
          <h2>My works</h2>
        </div>
      ),
      scale: scale4,
    },
    {
      child: <p className="w-full px-2"></p>,
      scale: scale5,
    },
    {
      child: (
        <div className="w-full h-full bg-gray-500 flex items-center justify-center">
          <p className="w-full px-2">
            6 лет назад я выбрал путь frontend разработчика. С тех пор, я
            тружусь удаленно, сотрудничая с различными агентствами, оказывая
            консультации стартапам и работая над цифровыми продуктами для
            бизнеса и потребительского рынка.
          </p>
        </div>
      ),
      scale: scale6,
    },
    {
      child: (
        <div className="text-2xl xl:text-4xl font-extrabold text-accent">
          <CountUp start={0} end={6} duration={5} /> + лет опыта
        </div>
      ),
      scale: scale5,
    },
    {
      child: (
        <div className="w-full h-full bg-gray-500 flex items-center justify-center"></div>
      ),
      scale: scale6,
    },
    {
      child: (
        <div className="w-full h-full bg-gray-500 flex items-center justify-center"></div>
      ),
      scale: scale8,
    },
    {
      child: (
        <>
          <div className="flex gap-x-4 bg-gray-500 p-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {item.title !== undefined && (
                  <>
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                  </>
                )}

                <div>{item.stage}</div>
                <div
                  className={`flex gap-4 flex-wrap ${
                    item.icons ? "xl:w-[90%]" : ""
                  }`}>
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => (
                    <div className="text-2xl group">{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ),
      scale: scale9,
    },
  ];

  return (
    <div
      ref={container}
      className="h-[300vh] relative bg-site bg-cover bg-no-repeat">
      <div className="sticky overflow-hidden top-0 h-screen">
      {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
        {elements.map(({ child, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="w-full h-full top-0 absolute flex items-center justify-center elementImage">
              <div className="relative w-[25vw] h-[25vh]">{child}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomParallax;
