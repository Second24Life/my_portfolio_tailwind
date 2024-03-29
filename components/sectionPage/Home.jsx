import { motion } from "framer-motion";
import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";

import { fadeIn } from "@/utils/variantsAnimation";
import { BsArrowDown } from "react-icons/bs";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-b from-primary/60 via-black/50 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1">
            От идеи
            <br />
            <span className="text-accent"> до Реализации</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Я использую современные технологии и инструменты для разработки
            эффективных и оптимизированных решений, которые отвечают требованиям
            пользователей и бизнеса.
          </motion.p>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut" }}
          exit="hidden"
          className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-14 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        animate="show"
        transition={{ duration: 1, ease: "easeInOut" }}
        exit="hidden"
        className="absolute bottom-5 left-1/2">
        <BsArrowDown className="text-3xl animate-bounce opacity-20" />
      </motion.div>
    </div>
  );
};

export default Home;
