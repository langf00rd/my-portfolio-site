import { useRouter } from "next/router";
import { ReactNode } from "react";
import { BsArrowLeft } from "react-icons/bs";
import ScrollButtons from "~/components/ScrollButtons";

export default function BlogLayout(props: {
  children: ReactNode;
  title: string;
  subtitle?: string;
}): JSX.Element {
  return (
    <>
      <ScrollButtons />
      <div className="max-w-2xl mx-auto">
        <button
          className="flex items-center underline gap-2 mb-4"
          onClick={() => window.history.back()}
        >
          <BsArrowLeft />
          <p>back</p>
        </button>
        <h2 className="mb-4 md:mb-0 text-2xl">{props.title}</h2>
        <p className="mt-2 text-textGrey">{props.subtitle}</p>
        <div className="w-full mt-10">{props.children}</div>
      </div>
    </>
  );
}
