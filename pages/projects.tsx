import MainLayout from "~/layouts/main.layout";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Meta from "~/components/Meta";

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
    image: "/assets/images/projects/vapourware-studios.png",
    link: "https://www.vapourwarestudios.co/",
    description: "a website for a software and creative design agency",
  },
  {
    title: "wedey",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/wedey.png",
    link: "https://www.wedey.co/",
    description: "we bringing the local markets to you",
  },
  {
    title: "magna nft",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/magna.png",
    link: "https://www.buymagna.com/",
    description:
      "a free mint storytelling nft project aimed at onboarding newbies into the web3 ecosystem",
  },
  {
    title: "brylluslisten",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/byllupslisten.png",
    link: "https://bryllupslisten.no/",
    description:
      "The wedding list is a wishlist that allows you to gather your wishes in one place and easily share the list with the wedding guests",
  },
  {
    title: "waverpass nft",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/waverpass.png",
    link: "https://www.waverpass.com/",
    description:
      "1,000 passes available for mint, owning a Waver Pass grants holders access to products, tools and projects exclusively built and owned by Openwaver for free",
  },
  {
    title: "tv anywhwere africa",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/tv-anywhere-africa.png",
    link: "https://tvanywhereafrica.vercel.app/",
    description:
      "a platform for delivering high-quality, live and on-demand streaming content",
  },
  {
    title: "ordinary strangers nft",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/ordinary-strangers-nft.png",
    link: "https://www.ordinarystrangers.com/",
    description: "an nft project's minting and landing page",
  },
  {
    title: "nft aio",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/nft-aio.png",
    link: "https://nft-aio.vercel.app/",
    description: "a landing page for an nft project",
  },
  {
    title: "mcini tv",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/mcini-tv.png",
    link: "https://mcini.tv/",
    description: "a web app for streaming movies",
  },
  {
    title: "richfaith recruitment agency",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/assets/images/projects/richfaith-recruitment-agency.png",
    link: "https://richfaithrecruitment.com/",
    description:
      "a company that connects talented individuals to international opportunities in a variety of industries",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <Meta title="my projects ツ" />
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
                  className="flex items-center w-max mt-5 transition-all hover:text-brand text-textGrey text-sm"
                >
                  <p>see project</p>
                  <FiArrowUpRight className="ml-1" />
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
                  alt={`screenshot of ${project.title} project`}
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
