import MainLayout from "~/layouts/main.layout";

export default function About() {
  return (
    <MainLayout>
      <>
        <div className="grid gap-5">
          {/* <p className="text-[3.5rem] leading-[1.5] font-bold text-brand">
              passionate
              <span className="underline gradient-text"> developer</span>
            </p> */}
          <p>
            Pushing the boundaries of design and striving to create something truly unique
            and meaningful is a constant pursuit of mine. In addition to my work, I also
            value meaningful conversations and good music, which help to inspire and
            motivate me in my creative process.
          </p>
          <p>
            My goal is to continue improving, learning, and exploring all the different
            areas life has to offer, with the ultimate goal of building a beloved home
            with the highly talented people at Norm Architects.
          </p>
        </div>
      </>
    </MainLayout>
  );
}
