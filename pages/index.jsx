import Lenis from "@studio-freight/lenis";
import Home from "../components/page/Home";
import ZoomParallax from "../components/page/ZoomParallax";
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
    </>
  );
};

export default HomePage;
