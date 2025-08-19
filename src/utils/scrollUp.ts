import { useEffect } from "react";
import { getLenisInstance } from "~/components/SmoothScroll";

export default function ScrollUp() {
  useEffect(() => {
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      setTimeout(() => {
        getLenisInstance()?.scrollTo(0);
      }, 100);
    }
  }, []);

  return null;
}