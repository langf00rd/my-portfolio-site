import { useState, useEffect } from "react";

function useScroll() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<{ x: number; y: number }>();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrolledDown(true);
      } else {
        // Scrolling up
        setScrolledDown(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrolledDown,
    scrollPosition,
  };
}

export default useScroll;
