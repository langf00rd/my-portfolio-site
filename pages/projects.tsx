import MainLayout from "~/layouts/main.layout";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const PROJECTS: {
  title: string;
  year: { from: string; to?: string };
  image: string;
  description: string;
  link?: string;
}[] = [
  {
    title: "vapourware studios",
    year: {
      from: "2022",
    },
    image: "/images/vapourware-studios.png",
    link: "https://www.vapourwarestudios.co/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "magna nft",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/magna.png",
    link: "https://www.buymagna.com/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "tv anywhwere",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/tv-anywhere-africa.png",
    link: "https://tvanywhereafrica.vercel.app/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "wedey",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/wedey.png",
    link: "https://www.wedey.co/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "brylluslisten",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/byllupslisten.png",
    link: "https://bryllupslisten.no/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "ordinary strangers nft",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/ordinary-strangers-nft.png",
    link: "https://www.ordinarystrangers.com/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "nft aio",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/nft-aio.png",
    link: "https://nft-aio.vercel.app/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "mcini tv",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/mcini-tv.png",
    link: "https://mcini.tv/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "waverpass nft",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/waverpass.png",
    link: "https://www.waverpass.com/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "richfaith recruitment agency",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/richfaith-recruitment-agency.png",
    link: "https://richfaithrecruitment.com/",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        {PROJECTS.map((project, index) => (
          <div
            className="w-full md:flex justify-between border-b pb-10 mb-10"
            key={index}
          >
            <div className="flex-1 grid h-max gap-2 md:sticky md:top-[200px] mb-5 md:mb-0">
              <p className="font-[500] text-md">
                {project.title}
                <span className="text-textGrey">
                  &nbsp; <span className="text-brand">•</span> &nbsp;
                  {project.year.from} {project.year.to && `- ${project.year.to}`}
                </span>
              </p>
              <p>{project.description}</p>
              {project.link && (
                <Link
                  href={project.link}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center w-max mt-5 transition-all hover:text-brand"
                >
                  <p>checkout project</p>
                  <FiArrowUpRight className="ml-2" />
                </Link>
              )}
            </div>
            <div className=" flex items-center justify-center flex-1 rounded-xl overflow-hidden">
              <Link
                href={project.link || ""}
                rel="noreferrer"
                target="_blank"
                className="flex items-center w-max mt-5 transition-all hover:text-brand"
              >
                <Image
                  src={project.image}
                  alt=""
                  width={600}
                  height={600}
                  className="object-contain hover:grayscale cursor-pointer transition-all rounded-md bg-[#F2F2F2]"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
