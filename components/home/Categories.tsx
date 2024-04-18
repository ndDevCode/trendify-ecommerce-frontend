import React from "react";
import Image from "next/image";
import { Montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Categories({ data }: any) {
  return (
    <>
      <h1
        className={cn(
          Montserrat.className,
          "text-xl sm:text-3xl mb-12 bg-gradient-to-t from-black to-gray-700 bg-clip-text text-transparent"
        )}
      >
        Categories
      </h1>
      <div className="flex flex-1 gap-2 overflow-scroll no-scrollbar">
        {data?.map((category: any, index: number) => (
          <div key={index} className="flex flex-col gap-2">
            <Image
              className={
                "min-w-[80px] duration-700 " +
                `${index % 2 === 0 ? "hover:rotate-12" : "hover:-rotate-12"}`
              }
              src={category.img}
              alt="category image"
              width={300}
              height={300}
            ></Image>
            <p className="text-center text-sm sm:text-lg font-thin text-wrap">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
