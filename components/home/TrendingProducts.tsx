"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import { classNames } from "@/lib/utils";

export default function TrendingProducts() {
  const categories = ["Women", "Men", "Kids"];

  return (
    <div>
      <h1 className="text-xl sm:text-3xl mb-8 bg-gradient-to-t from-black to-gray-700 bg-clip-text text-transparent">
        Trending Products
      </h1>
      <Tab.Group>
        <Tab.List className={"flex space-x-1 p-1 w-fit"}>
          {categories.map((category) => (
            <Tab
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
        <Tab.Panels className={"mt-5 ms-1"}>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
