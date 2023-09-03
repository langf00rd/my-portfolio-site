import MainLayout from "~/layouts/main.layout";
import Image from "next/image";

const PROJECTS: {
  title: string;
  year: { from: string; to?: string };
  image: string;
  description: string;
}[] = [
  {
    title: "vapourware studios",
    year: {
      from: "2022",
    },
    image: "/images/1.webp",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "openwaver",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/1.webp",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "magna nft",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/1.webp",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "tv anywhwere",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/1.webp",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "wedey",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/1.webp",
    description:
      "this app has no description because its random, and i am too lazy to open another tab to search for a lorem ipsum generator, and coming to thing of it, that would have been a much better option",
  },
  {
    title: "loyalstar",
    year: {
      from: "2022",
      to: "2023",
    },
    image: "/images/1.webp",
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

                <br />
              </p>
              <p>{project.description}</p>
            </div>
            <div className="bg-[#F2F2F2] flex items-center justify-center flex-1 rounded-xl">
              <Image
                src="/images/1.webp"
                alt=""
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
