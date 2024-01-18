import Link from "next/link";

import { RiTelegramFill } from "react-icons/ri";
import { SiHabr } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
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
    </div>
  );
};

export default Socials;
