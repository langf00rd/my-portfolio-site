import { Inter } from "next/font/google";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const ROUTES = [
  "/",
  "/about",
  "/projects",
  "/work-experience",
  "/contact",
  "/socials",
  "/resume",
];

export default function MainLayout(props: PropsWithChildren): JSX.Element {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <main className={inter.className}>
      <header className="fixed top-0 left-0 w-screen border-b flex items-center justify-center h-[70px] z-10 select-none bg-white">
        <div className="h-full w-full px-5 flex items-center justify-between">
          <HiOutlineMenuAlt4
            onClick={toggleMenu}
            size={25}
            className="cursor-pointer hover:text-brand transition-all"
          />
          <p>
            langford ツ <span className="text-textGrey">| software developer</span>
          </p>
          <p className="font-[500]">10:24 AM</p>
        </div>
      </header>
      <div className="flex pt-[100px] max-w-[1700px] px-5 mx-auto items-start">
        {showMenu && (
          <div className="top-[100px] w-[500px] sticky px-5">
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
        <div>{props.children}</div>
      </div>
    </main>
  );
}
