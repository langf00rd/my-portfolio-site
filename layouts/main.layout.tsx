import { Inter } from "next/font/google";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { getCurrentTime } from "~/utils/getCurrentTime.uitl";
import useScroll from "~/hooks/useScroll.hook";

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
  const { scrolledDown } = useScroll();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <main className={inter.className}>
      <header className="fixed top-0 left-0 w-screen border-b flex items-center justify-center h-[70px] z-10 select-none bg-transluscentWhite backdrop-blur-md">
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
                langford ツ <span className="text-brand">•</span>
                <span className="text-textGrey"> software developer</span>
              </motion.p>
            </div>
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <p className="text-2xl">
                {router.pathname.replace("/", "").replace("-", "")} ツ
              </p>
            </motion.div>
          )}
          <p className="font-[500] hidden md:block">{getCurrentTime()}</p>
        </div>
      </header>
      <div className="flex pt-[100px] max-w-[1700px] px-5 mx-auto items-start">
        {showMenu && (
          <div className="md:top-[100px] top-[70px] w-[500px] md:sticky p-5 fixed bg-transluscentWhite backdrop-blur-md">
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
        className={`text-sm text-textGrey flex items-center justify-center mt-20 py-5 ${
          router.pathname !== ROUTES[2] && "border-t"
        }`}
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
