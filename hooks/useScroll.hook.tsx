import { useState, useEffect } from "react";

function useScroll() {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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
  };
}

export default useScroll;
