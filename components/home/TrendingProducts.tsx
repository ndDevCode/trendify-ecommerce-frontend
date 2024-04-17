"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import { classNames } from "@/lib/utils";

import { CarouselSlider } from "../common/CarouselSlider";

import productImg from "@/public/images/products/product-1.png";
import ProductCard from "../common/ProductCard";

export default function TrendingProducts() {
  const categories = ["Women", "Men", "Kids"];
  const products = [
    {
      id: 1,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 2,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 3,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 4,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 5,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
  ];

  return (
    <div>
      <h1 className="text-xl sm:text-3xl mb-8 bg-gradient-to-t from-black to-gray-700 bg-clip-text text-transparent">
        Trending Products
      </h1>
      <Tab.Group>
        <Tab.List className={"flex space-x-1 p-1 w-fit"}>
          {categories.map((category) => (
            <Tab
              content={`${category}`}
              key={category}
              className={({ selected }) =>
                classNames(
                  "px-2 py-1 me-2 sm:text-lg sm:font-medium font-thin leading-5 sm:w-[100px]",
                  "ring-white/60 ring-offset-2 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-950 border-b-4 border-blue-950 shadow"
                    : "text-black hover:bg-blue-900 hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className={"mt-8 ms-1"}>
          <Tab.Panel content="Women" className={"flex justify-center gap-3"}>
            <CarouselSlider component={ProductCard} items={products} />
          </Tab.Panel>
          <Tab.Panel content="Men">
            <CarouselSlider component={ProductCard} items={products} />
          </Tab.Panel>
          <Tab.Panel content="Kids">
            <CarouselSlider component={ProductCard} items={products} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="flex justify-center">
        <button
          className="inline-flex h-6 animate-shimmer items-center justify-center rounded-xl 
        bg-[linear-gradient(110deg,#4b6cb7,45%,#182848,55%,#4b6cb7)] bg-[length:200%_100%] px-4 font-medium text-white
        transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
        hover:text-slate-100 hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]"
        >
          View All
        </button>
      </div>
    </div>
  );
}
