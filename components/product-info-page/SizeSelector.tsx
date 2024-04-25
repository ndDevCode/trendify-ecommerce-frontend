"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function SizeSelector({
  sizes,
  classNames,
}: {
  sizes: string[];
  classNames?: string;
}) {
  return (
    <div className={cn(classNames, "flex flex-wrap gap-2")}>
      {sizes.map((size, index) => (
        <div
          key={index}
          className={cn(
            "w-10 h-10 rounded-full bg-slate-200 hover:bg-stone-400 cursor-pointer flex items-center justify-center"
          )}
        >
          <h1>{size}</h1>
        </div>
      ))}
    </div>
  );
}
