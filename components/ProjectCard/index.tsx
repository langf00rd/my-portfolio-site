import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "~/interface";

export default function ProjectCard(props: { data: Project }): JSX.Element {
  return (
    <li>
      <Link
        className="grid gap-3 transition-all"
        href={props.data.link || ""}
        rel="noreferrer"
        target="_blank"
      >
        <div className="flex items-center">
          <h2 className="mr-2 text-black hover:text-brand transition-all">
            {props.data.title}
          </h2>
          <FiArrowUpRight className="ml-1 text-textGrey" />
        </div>
        <Image
          src={props.data.image}
          alt={`screenshot of ${props.data.title} project`}
          width={600}
          height={600}
          className="object-contain rounded-2xl bg-[#F2F2F2] border"
        />
      </Link>
    </li>
  );
}
