import { MAIN_CONTENT } from "~/constants/content";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto py-[3.3rem] md:px-0 px-5">
      <div className="grid gap-[80px]">
        {MAIN_CONTENT.map((content, index) => (
          <div
            key={index}
            className={`md:flex grid gap-5 pb-20 justify-between ${
              index !== MAIN_CONTENT.length - 1 && "border-b"
            }`}
          >
            <div className="flex-1 md:sticky md:top-[70px] md:h-max">
              {content.left}
            </div>
            <div className="flex-1">{content.right}</div>
          </div>
        ))}
      </div>
      <div className="text-center py-5 text-xl md:text-[2.3rem] rounded-[2rem] leading-[60px]">
        <h1>
          <span className="gradient-text">hire me</span> let&apos;s build
          something cool together ツ
        </h1>
      </div>
    </main>
  );
}
