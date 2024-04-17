import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import HeroImage from "@/public/images/hero_image.png";

const font = localFont({
  src: "../../public/fonts/DancingScript-VariableFont_wght.ttf",
});

function Hero() {
  return (
    <>
      <div className="flex items-center lg:items-start justify-center">
        <Image
          className="rounded-xl w-auto"
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
            className="inline-flex justify-center rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm 
            font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
            focus-visible:ring-offset-2 hover:scale-110 duration-700"
          >
            For Women
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm 
            font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
            focus-visible:ring-offset-2 hover:scale-110 duration-700"
          >
            For Men
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm 
            font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
            focus-visible:ring-offset-2 hover:scale-110 duration-700"
          >
            For Kids
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
