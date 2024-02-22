import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiDocker,
  SiFramer,
  SiGit,
  SiJira,
  SiNextdotjs,
  SiRedux,
  SiThreedotjs,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import { argusImage, edleedImage, oxweImage } from "./imagePath";

export * from "./imagePath";

const styleIcons =
  "group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150  aspect-square rotate-0 group-hover:-rotate-[360deg] hover:fill-accent group-hover:-translate-y-6 group-hover:-skew-y-6 group-hover:skew-x-6";

export const skills = [
  {
    title: "HTML",
    icon: <FaHtml5 className={styleIcons} />,
  },
  {
    title: "CSS",
    icon: <FaCss3 className={styleIcons} />,
  },
  {
    title: "JS",
    icon: <FaJs className={styleIcons} />,
  },
  {
    title: "React",
    icon: <FaReact className={styleIcons} />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className={styleIcons} />,
  },
  {
    title: "Framer",
    icon: <SiFramer className={styleIcons} />,
  },
  {
    title: "Redux",
    icon: <SiRedux className={styleIcons} />,
  },
  {
    title: "Git",
    icon: <SiGit className={styleIcons} />,
  },
  {
    title: "Docker",
    icon: <SiDocker className={styleIcons} />,
  },
  {
    title: "Jira",
    icon: <SiJira className={styleIcons} />,
  },
  {
    title: "Trello",
    icon: <SiTrello className={styleIcons} />,
  },
  {
    title: "Three.js",
    icon: <SiThreedotjs className={styleIcons} />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className={styleIcons} />,
  },
];

export const experience = [
  {
    title: "Веб-разработчик - Skyweb24",
    stage: "2018 - 2019",
  },
  {
    title: "Frontend developer - Freelance",
    stage: "2020 - 2023",
  },
  {
    title: "Frontend developer - Antifreeze studio",
    stage: "2023 - н.в.",
  },
];

export const projectImages = [
  {
    title: "Edlee",
    images: edleedImage,
    link: "https://edleed.com/",
  },
  {
    title: "Oxwe",
    images: oxweImage,
    link: "https://oxwe.ru/",
  },
  {
    title: "Argus",
    images: argusImage,
    link: "https://argus-company.ru/",
  },
  {
    title: "Различные проекты",
    images: argusImage,
    link: ''
  }
  // {
  //   title: "ShortLinks",
  //   images: ShortLinksImage,
  // },
];