import { Inter } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import ScrollButtons from "~/components/ScrollButtons";
import Meta from "~/components/Meta";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout(props: {
  showFooter?: boolean;
  children: ReactNode;
  metaTitle?: string;
}): JSX.Element {
  const router = useRouter();
  return (
    <main className={`${inter.className} px-5`}>
      <Meta title={props.metaTitle || "langford - software developer"} />
      <Analytics />
      <ScrollButtons />
      <div className="max-w-[1300px] mx-auto py-[3.3rem]">{props.children}</div>
      {props.showFooter && (
        <footer
          className={`text-sm text-textGrey flex items-center justify-center py-5 pb-20 border-t border-t-[#f2f2f2] ${
            router.pathname === "/" && "border-none"
          }`}
        >
          made with 💙 by
          <Link
            rel="noreferrer"
            target="_blank"
            className="underline"
            href="https://x.com/langford_dev"
          >
            &nbsp;@langford
          </Link>
        </footer>
      )}
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
