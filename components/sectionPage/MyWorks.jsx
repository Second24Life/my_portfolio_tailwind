import { motion } from "framer-motion";
import { fadeZoom } from "@/utils/variantsAnimation";
import React from "react";

const MyWorks = () => {
  return (
    <div className="w-full h-[200vh] relative flex flex-col items-center justify-center text-center bg-black">
      <motion.div
        variants={fadeZoom}
        initial="hidden"
        animate="visible"
        className="w-full h-full relative flex items-center justify-center text-center"
      >
        <h1 className="text-4xl font-bold">Key to ai</h1>
      </motion.div>
      <motion.div
        variants={fadeZoom}
        initial="hidden"
        animate="visible"
        className="w-full h-full relative flex items-center justify-center text-center"
      >
        <h1 className="text-4xl font-bold">Short links</h1>
      </motion.div>
    </div>
  );
};

export default MyWorks;
