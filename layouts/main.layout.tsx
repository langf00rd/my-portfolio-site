import { Inter } from "next/font/google";
import Link from "next/link";
import { PropsWithChildren, ReactNode, useState } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useScroll from "~/hooks/useScroll.hook";
import { FiArrowUp } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });
const ROUTES = [
  "/",
  "/about",
  "/projects",
  "/work-experience",
  "/resume",
  "/contact",
  "/my-posts",
];

export default function MainLayout(props: PropsWithChildren): JSX.Element {
  const router = useRouter();
  const { scrolledDown, scrollPosition } = useScroll();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <main className={inter.className}>
      {/* <header className="fixed bottom-0 md:top-0 left-0 w-screen border-t md:border-b flex items-center justify-center h-[50px] z-10 select-none bg-white">
        <div className="h-full w-full px-5 flex items-center justify-between">
          {!showMenu ? (
            <HiOutlineMenuAlt4
              onClick={toggleMenu}
              size={25}
              className="cursor-pointer hover:text-brand transition-all"
            />
          ) : (
            <HiX
              onClick={toggleMenu}
              size={25}
              className="cursor-pointer hover:text-brand transition-all"
            />
          )}

          {!scrolledDown ? (
            <div>
              <motion.p
                initial={{ width: "0" }}
                animate={{ width: "100%" }}
                className="overflow-hidden h-[22px] transition-all"
              >
                <span className="text-textGrey">
                  {router.pathname.replace(/^a-zA-Z0-9 ]/g, "")}
                </span>
              </motion.p>
            </div>
          ) : (
            <>
              <div className="w-[50px]">
                <>
                  <motion.p
                    initial={{ width: "0" }}
                    animate={{ width: "100%" }}
                    className="overflow-hidden transition-all text-xl md:text-2xl"
                  >
                    ツ
                  </motion.p>
                </>
              </div>
            </>
          )}
          <p>
            <span className="text-textGrey"> software developer</span>
          </p>
         </div>
      </header> */}
      {scrollPosition && scrollPosition.y > 500 && (
        <div>
          <FAB>
            <FiArrowUp />
          </FAB>
        </div>
      )}
      <div className="flex pt-10 md:pt-[80px] max-w-[1300px] px-5 mx-auto items-start pb-[3rem]">
        {showMenu && (
          <div className="md:top-[100px] h-screen top-0 md:top-[70px] w-[500px] md:sticky p-5 fixed bg-white">
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
              <ul className="grid gap-4">
                {ROUTES.map((route, index) => (
                  <li key={index}>
                    <Link
                      className={`hover:text-brand transition-all  hover:underline whitespace-nowrap ${
                        router.pathname === route ? "text-brand" : "text-textGrey"
                      }`}
                      href={route}
                    >
                      {route}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
        {props.children}
      </div>
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="shadow-md hover:shadow-none transition-all active:scale-[0.8] border rounded-full w-[60px] h-[60px] flex items-center justify-center fixed bottom-[30px] right-[30px] cursor-pointer hover:text-brand z-10 bg-white"
    >
      {props.children}
    </motion.div>
  );
}
