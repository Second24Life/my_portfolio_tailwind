import Image from "next/image";
import { motion } from "framer-motion";
import { projectLinks } from "../static";

const Column = ({ images, y, needLink }) => {
  return (
    <motion.div
      className="relative h-full w-1/4  min-w-[200px] md:min-w-[250px] flex flex-col gap-[2vw] paralaxColumn"
      style={{ y }}>
      {images.map((src, i) =>
        needLink ? (
          <div
            key={i}
            className="relative h-full w-full rounded-[1vw] overflow-hidden">
            <a
              href={projectLinks.find((link) => src.includes(link.nameImage))?.link || ""}
              target="_blank"
              referrerPolicy="no-referrer">
              <Image src={`${src}`} alt="image" fill />
            </a>
          </div>
        ) : (
          <div
            key={i}
            className="relative h-full w-full rounded-[1vw] overflow-hidden">
            <Image src={`${src}`} alt="image" fill style={{objectFit: 'cover'}} />
          </div>
        ),
      )}
    </motion.div>
  );
};

export default Column;
