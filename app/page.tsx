import Image from "next/image";
import localFont from "next/font/local";
import HeroImage from "@/public/images/hero_image.png";

const font = localFont({
  src: "../public/fonts/DancingScript-VariableFont_wght.ttf",
});

export default function Home() {
  return (
    <>
      {/* Hero Section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 my-32">
        <div className="flex items-center lg:items-start justify-center">
          <Image
            className="rounded-xl"
            src={HeroImage}
            alt="hero image"
            width={500}
            height={800}
          ></Image>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 ms-4 my-5">
          <h1 className="xl:text-[90px] md:text-7xl text-5xl md:leading-[7rem] text-center">
            There is clothing <br />
            for everyone
          </h1>
          <p className={`text-4xl font-thin ${font.className} text-center`}>
            Trendify is the best place to buy clothes
          </p>
          <div className="flex gap-5">
            <button
              type="button"
              className="inline-flex justify-center rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              For Women
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              For Men
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              For Kids
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="my-32 font-bold">
        <h1 className="text-3xl">Categories</h1>
        <div className="flex gap-2"></div>
      </div>
    </>
  );
}
