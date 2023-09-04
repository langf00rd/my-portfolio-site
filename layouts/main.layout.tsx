import { Inter } from "next/font/google";
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import useScroll from "~/hooks/useScroll.hook";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout(props: PropsWithChildren): JSX.Element {
  const { scrollPosition, scrollDown, scrollUp } = useScroll();

  return (
    <main className={`${inter.className} px-5`}>
      {scrollPosition && scrollPosition.y > 500 && (
        <div className="fixed bottom-[30px] right-[30px] grid gap-3">
          <FAB onClick={scrollUp}>
            <FiArrowUp />
          </FAB>
          <FAB onClick={scrollDown}>
            <FiArrowDown />
          </FAB>
        </div>
      )}
      <div className="max-w-[1300px] mx-auto py-[3.3rem]">{props.children}</div>
      <footer
        className={`text-sm text-textGrey flex items-center justify-center py-5 pb-20 `}
      >
        &copy;{new Date().getFullYear()} made 💙 with by
        <Link
          rel="noreferrer"
          target="_blank"
          className="underline text-brand"
          href="https://x.com/langford_dev"
        >
          &nbsp;@langford
        </Link>
      </footer>
    </main>
  );
}

export function FAB(props: { children: ReactNode; onClick?: () => void }): JSX.Element {
  return (
    <motion.div
      onClick={props.onClick}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="shadow-md hidden hover:shadow-none active:scale-[0.8] border rounded-full w-[45px] h-[45px] md:flex items-center justify-center cursor-pointer hover:text-brand z-10 bg-white"
    >
      {props.children}
    </motion.div>
  );
}
