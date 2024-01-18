// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

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

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import { useState } from "react";

const styleIcons =
  "group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150  aspect-square rotate-0 group-hover:-rotate-[360deg] hover:fill-accent group-hover:-translate-y-6 group-hover:-skew-y-6 group-hover:skew-x-6";

//  data
const aboutData = [
  {
    title: "Умения",
    info: [
      {
        // title: "Web Development",
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

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">
            Небольшая <span className="text-accent">история</span> работы.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            6 лет назад я выбрал путь frontend разработчика. С тех пор, я
            тружусь удаленно, сотрудничая с различными агентствами, оказывая
            консультации стартапам и работая над цифровыми продуктами для
            бизнеса и потребительского рынка.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Лет опыта
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Довольных клиентов
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={200} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Законченных проектов
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[200px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
                {/* title */}
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;
