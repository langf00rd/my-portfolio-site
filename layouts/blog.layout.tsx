import { useRouter } from "next/router";
import { ReactNode } from "react";
import { BsArrowLeft } from "react-icons/bs";
import ScrollButtons from "~/components/ScrollButtons";

export default function BlogLayout(props: {
  children: ReactNode;
  title: string;
  subtitle?: string;
}): JSX.Element {
  const router = useRouter();
  return (
    <>
      <ScrollButtons />
      <div className="max-w-2xl mx-auto">
        <button
          className="flex items-center underline gap-2 mb-4"
          onClick={() => {
            router.pathname === "/blog" ? router.push("/") : router.push("/blog");
          }}
        >
          <BsArrowLeft />
          <p>back</p>
        </button>
        <h1 className="mb-4 md:mb-0 text-2xl">{props.title}</h1>
        <p className="mt-2 text-textGrey">{props.subtitle}</p>
        <div className="w-full mt-10">{props.children}</div>
      </div>
    </>
  );
}
