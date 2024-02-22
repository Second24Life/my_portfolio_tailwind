import Finish from "@/components/sectionPage/Finish";
import Home from "@/components/sectionPage/Home";
import MyWorks from "@/components/sectionPage/MyWorks";
import ZoomParallax from "@/components/sectionPage/ZoomParallax";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Home />
      <ZoomParallax />
      <MyWorks />
      <Finish />
    </>
  );
};

export default HomePage;
