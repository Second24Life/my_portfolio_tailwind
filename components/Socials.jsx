import Link from "next/link";
import { motion } from "framer-motion";
import { RiTelegramFill } from "react-icons/ri";
import { SiHabr } from "react-icons/si";
import { fadeIn } from "../variants";

const Socials = () => {
  return (
    <motion.div variants={fadeIn("left", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden" className="flex items-center gap-x-5 text-lg">
      <div className="">Contact me:</div>
      <Link
        href={"https://t.me/second24life"}
        target={"_blank"}
        className="hover:text-accent transition-all duration-300">
        <RiTelegramFill />
      </Link>
      <Link
        href={"https://freelance.habr.com/freelancers/Second24Life"}
        target={"_blank"}
        className="hover:text-accent transition-all duration-300">
        <SiHabr />
      </Link>
    </motion.div>
  );
};

export default Socials;
