import Image from "next/image";
import localFont from "next/font/local";
import HeroImage from "@/public/images/hero_image.png";

const font = localFont({
  src: "../public/fonts/DancingScript-VariableFont_wght.ttf",
});

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-36">
        <div>
          <Image
            src={HeroImage}
            alt="hero image"
            width={500}
            height={800}
          ></Image>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-[100px] leading-[7rem]">
            There is clothing <br />
            for everyone
          </h1>
          <p className={`text-2xl font-thin leading-5 ${font.className}`}>
            Trendify is the best place to buy clothes
          </p>
          <div className="flex gap-5">
            <button
              type="button"
              className="border border-black px-4 py-2 text-sm font-medium text-blue-950 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-full p-1"
            >
              For Men
            </button>
            <button
              type="button"
              className="border border-black px-4 py-2 text-sm font-medium text-blue-950 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-full p-1"
            >
              For Women
            </button>
            <button
              type="button"
              className="border border-black px-4 py-2 text-sm font-medium text-blue-950 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-full p-1"
            >
              For Kids
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
