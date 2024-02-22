import Image from "next/image";
import { motion } from "framer-motion";

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] paralaxColumn"
      style={{ y }}>
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="relative h-full w-full rounded-[1vw] overflow-hidden">
            <Image src={`${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
