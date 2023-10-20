import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaDev, FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IBlogPost, ISocial, JobExperience, Project } from "~/interface";
import ProjectCard from "~/components/ProjectCard";
import JobExperienceCard from "~/components/JobExperienceCard";
import BlogPost from "~/components/BlogPost";

export const BLOG_POSTS: IBlogPost[] = [
  {
    date: "06-09-2023",
    title: "so you want to become a developer...",
    page: "/post/so-you-want-to-become-a-developer",
    animationDuration: 0.1,
  },
];

export const SOCIALS: ISocial[] = [
  {
    label: "github",
    link: "https://github.com/langford-dev",
    icon: <FiGithub size={20} />,
  },
  {
    label: "instagram",
    link: "https://instagram.com/langford_dev",
    icon: <FaInstagram size={20} />,
  },
  {
    label: "dev.to",
    link: "https://dev.to/langford_dev",
    icon: <FaDev size={20} />,
  },
  {
    label: "x",
    link: "https://x.com/langford_dev",
    icon: <RxTwitterLogo size={20} />,
  },
  {
    label: "mail",
    link: "mailto:langfordquarshie21@gmail.com",
    icon: <HiOutlineMail size={20} />,
  },
  {
    label: "imessage",
    link: "imessage:langfordquarshie@icloud.com",
    icon: <BiMessageRounded size={20} />,
  },
];

export const PROJECTS: Project[] = [
  {
    title: "dazzl",
    image: "/assets/images/projects/dazzl.png",
    link: "https://dazzl.pro",
    description: "minimal website builder",
  },
  {
    title: "vapourware studios",
    image: "/assets/images/projects/vapourware-studios.png",
    link: "https://www.vapourwarestudios.co/",
    description: "a website for a software and creative design agency",
  },
  {
    title: "wedey",
    image: "/assets/images/projects/wedey.png",
    link: "https://www.wedey.co/",
    description: "we bringing the local markets to you",
  },
  {
    title: "magna nft",
    image: "/assets/images/projects/magna.png",
    link: "https://www.buymagna.com/",
    description:
      "a free mint storytelling nft project aimed at onboarding newbies into the web3 ecosystem",
  },
  {
    title: "brylluslisten",
    image: "/assets/images/projects/byllupslisten.png",
    link: "https://bryllupslisten.no/",
    description:
      "The wedding list is a wishlist that allows you to gather your wishes in one place and easily share the list with the wedding guests",
  },
  {
    title: "mcini tv",
    image: "/assets/images/projects/mcini-tv.png",
    link: "https://mcini.tv/",
    description: "a web app for streaming movies",
  },
  {
    title: "waverpass nft",
    image: "/assets/images/projects/waverpass.png",
    link: "https://www.waverpass.com/",
    description:
      "1,000 passes available for mint, owning a Waver Pass grants holders access to products, tools and projects exclusively built and owned by Openwaver for free",
  },
  {
    title: "netflix clone",
    image: "/assets/images/projects/netflix-clone.png",
    link: "https://netflix-landing-clone.vercel.app/",
    description: "an online media file type converter",
  },
  {
    title: "tv anywhwere africa",
    image: "/assets/images/projects/tv-anywhere-africa.png",
    link: "https://tvanywhereafrica.vercel.app/",
    description:
      "a platform for delivering high-quality, live and on-demand streaming content",
  },
  {
    title: "ordinary strangers nft",
    image: "/assets/images/projects/ordinary-strangers-nft.png",
    link: "https://www.ordinarystrangers.com/",
    description: "an nft project's minting and landing page",
  },
  {
    title: "skillet web3 interview task",
    image: "/assets/images/projects/skillet.png",
    link: "https://skillet-app.vercel.app/",
    description: "an interview test project for skillet (web3)",
  },
  {
    title: "nft aio",
    image: "/assets/images/projects/nft-aio.png",
    link: "https://nft-aio.vercel.app/",
    description: "a landing page for an nft project",
  },
  {
    title: "richfaith recruitment agency",
    image: "/assets/images/projects/richfaith-recruitment-agency.png",
    link: "https://richfaithrecruitment.com/",
    description:
      "a company that connects talented individuals to international opportunities in a variety of industries",
  },
  {
    title: "pro player",
    image: "/assets/images/projects/pro-player.png",
    link: "https://pro-player.vercel.app/",
    description: "an hls live stream react video player component with drm support",
  },
  {
    title: "super dev blog",
    image: "/assets/images/projects/super-dev.png",
    link: "https://superdev-blog.vercel.app/",
    description: "my other blog website",
  },
  {
    title: "convrtr",
    image: "/assets/images/projects/convrtr.png",
    link: "https://convrtr.vercel.app/",
    description: "an online media file type converter",
  },
];

export const JOB_EXPERIENCE: JobExperience[] = [
  {
    companyName: "vapourware studios",
    jobTitle: "co-founder & software developer",
    years: "2018",
  },
  {
    companyName: "desense co",
    jobTitle: "software developer",
    years: "2021",
  },
  {
    companyName: "coral app",
    jobTitle: "developer relations",
    years: "2023",
  },
  {
    companyName: "clever programmer",
    jobTitle: "frontend web developer (web3)",
    years: "2022",
  },
  {
    companyName: "openwaver tech ltd",
    jobTitle: "lead frontend developer (web3)",
    years: "2021",
  },
  {
    companyName: "tv anywhere africa",
    jobTitle: "software developer",
    years: "2022",
  },
  {
    companyName: "kabb co",
    jobTitle: "software developer",
    years: "2023",
  },
  {
    companyName: "hashnode",
    jobTitle: "technical writer",
    years: "2022",
  },
  {
    companyName: "klick n build",
    jobTitle: "frontend software developer",
    years: "2022",
  },
];

export const SKILLS = [
  "react js, next js",
  "typescript",
  "prisma",
  "redux, zustand",
  "node js, express",
  "javascript",
  "tdd",
  "vue js",
  "ci/cd",
  "html",
  "css, tailwind css",
  "electron",
  "react native",
  "flutter, dart",
  "firebase",
  "mongo db",
  "ethers js, web3 js",
  "responsive design",
  "smart contract integration",
  "technical writing",
];

export const MAIN_CONTENT: { left: JSX.Element; right: JSX.Element }[] = [
  {
    left: (
      <div className="grid gap-2">
        <h2 className="text-xl">langford kwabena</h2>
        <p className="text-textGrey">software developer</p>
        <Link href="/cv">
          <p className="text-black underline">read my cv &rarr;</p>
        </Link>
      </div>
    ),
    right: (
      <div className="grid gap-5">
        <p>
          i&apos;m langford, a passionate software developer specialized in web and mobile
          app development
        </p>
        <p>
          with a deep love for coding and problem-solving, I thrive on creating innovative
          solutions that address real-world challenges.
        </p>
        <p>
          my journey as a developer has been marked by a commitment to continuous learning
          and a dedication to delivering exceptional results. Let&apos;s connect and
          explore how I can contribute to your next project.
        </p>
        <ul className="flex gap-5">
          {SOCIALS.map((social, index: number) => (
            <li key={index}>
              <Link
                className="w-[30px] h-[30px] transition-all hover:bg-[#f2f2f2] rounded-full p-1 block flex items-center justify-center"
                rel="noreferrer"
                target="_blank"
                href={social.link}
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    left: <h2 className="text-xl mb-4 md:mb-0">my blog</h2>,
    right: (
      <>
        <ul className="">
          {BLOG_POSTS.map((post, index: number) => (
            <BlogPost data={post} key={index} />
          ))}
        </ul>
        <Link
          href="/blog"
          className="flex items-center gap-2 mb-4 text-black w-max underline"
        >
          <p>read all</p>
          <BsArrowRight />
        </Link>
      </>
    ),
  },
  {
    left: <h2 className="text-xl mb-4 md:mb-0">experience &amp; work history</h2>,
    right: (
      <ul className="grid md:grid-cols-2">
        {JOB_EXPERIENCE.map((job, index) => (
          <JobExperienceCard data={job} key={index} />
        ))}
      </ul>
    ),
  },
  {
    left: <h2 className="text-xl mb-4 md:mb-0">my skills</h2>,
    right: (
      <ul className="grid gap-3 grid-cols-2">
        {SKILLS.map((skill, index) => (
          <li key={index}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    ),
  },
  {
    left: <h2 className="text-xl mb-4 md:mb-0">my works</h2>,
    right: (
      <ul className="grid gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard data={project} key={index} />
        ))}
      </ul>
    ),
  },
];
