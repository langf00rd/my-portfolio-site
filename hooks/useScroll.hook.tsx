import { useState, useEffect } from "react";

function useScroll() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  /** scroll to top of page */
  function scrollUp() {
    window.scrollTo(0, 0);
  }

  /** scroll to bottom of page */
  function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
  }

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
    scrollDown,
    scrollUp,
  };
}

export default useScroll;
