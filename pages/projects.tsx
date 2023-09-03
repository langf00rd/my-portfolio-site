import MainLayout from "~/layouts/main.layout";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid gap-10">
        {["", "", "", "", "", "", "", ""].map((project, index) => (
          <div key={index} className="grid grid-cols-2 gap-10">
            <div className="flex-1">
              <div className="grid gap-4">
                <p className="font-[500] text-md">
                  random project <span className="text-textGrey"> | 2023</span>
                </p>
                <p>
                  My goal is to continue improving, learning, and exploring all the
                  different areas life has to offer, with the ultimate goal of building a
                  beloved home with the highly talented people at Norm Architects.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-full bg-[#F2F2F2] p-10">
                <Image
                  src="/images/1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
