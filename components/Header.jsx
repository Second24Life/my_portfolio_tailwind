import { motion } from "framer-motion";
import Link from "next/link";
import Socials from "../components/Socials";
import { fadeIn } from "../variants";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 md:gap-y-4 py-8">
          {/* logo */}
          <Link href={"/"}>
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-xl md:text-5xl font-bold cursor-pointer">
              Maxim Zarubitskiy
            </motion.h2>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
