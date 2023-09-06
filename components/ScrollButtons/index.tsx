import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import useScroll from "~/hooks/useScroll.hook";
import { FAB } from "~/layouts/main.layout";

export default function ScrollButtons(): JSX.Element {
  const { scrollPosition, scrollDown, scrollUp } = useScroll();
  return (
    <>
      {scrollPosition && scrollPosition.y > 100 && (
        <div className="fixed bottom-[30px] right-[30px] grid gap-3">
          <FAB onClick={scrollUp}>
            <FiArrowUp />
          </FAB>
          <FAB onClick={scrollDown}>
            <FiArrowDown />
          </FAB>
        </div>
      )}
    </>
  );
}
