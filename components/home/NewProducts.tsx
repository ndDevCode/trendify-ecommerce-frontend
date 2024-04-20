"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { classNames } from "@/lib/utils";
import { Montserrat } from "@/lib/fonts";

import { Tab } from "@headlessui/react";
import ProductCard from "../common/ProductCard";

import productImg1 from "@/public/images/products/product-1.png";
import productImg2 from "@/public/images/products/product-2.png";
import productImg4 from "@/public/images/products/product-4.png";
import productImg5 from "@/public/images/products/product-5.png";
import productImg6 from "@/public/images/products/product-6.png";
import productImg7 from "@/public/images/products/product-7.png";
import productImg8 from "@/public/images/products/product-8.png";
import productImg9 from "@/public/images/products/product-9.png";
import productImg3 from "@/public/images/products/product-3.png";

export default function NewProducts() {
  const categories = ["Women", "Men", "Kids"];
  const products = [
    {
      id: 1,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg1,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 2,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg2,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 3,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg3,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 4,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg4,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 5,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg5,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 6,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg6,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 7,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg7,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 8,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg8,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
    {
      id: 9,
      name: "Product 1",
      color: "Black",
      href: "#",
      imageSrc: productImg9,
      imageAlt: "Front of men&apos;s Basic Tee in black.",
      price: "$35",
    },
  ];

  return (
    <div>
      <h1
        className={cn(
          Montserrat.className,
          "text-xl sm:text-3xl mb-8 bg-gradient-to-t from-black to-gray-700 bg-clip-text text-transparent"
        )}
      >
        New Arrivals
      </h1>
      <Tab.Group>
        <Tab.List className={"flex space-x-1 p-1 w-fit"}>
          {categories.map((category, i) => (
            <Tab
              content={`${category}`}
              key={i}
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
          <Tab.Panel
            content="Women"
            className={
              "grid grid-cols-1 md:grid-cols-2 min-[1080px]:grid-cols-3"
            }
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center"
              >
                <ProductCard prop={product} className="self-center" />
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel
            content="Men"
            className={
              "grid grid-cols-1 md:grid-cols-2 min-[1080px]:grid-cols-3"
            }
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center"
              >
                <ProductCard prop={product} className="self-center" />
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel
            content="Kids"
            className={
              "grid grid-cols-1 md:grid-cols-2 min-[1080px]:grid-cols-3"
            }
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center"
              >
                <ProductCard prop={product} />
              </div>
            ))}
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
