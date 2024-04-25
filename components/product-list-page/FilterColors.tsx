"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function FilterColors({
  colorCodes,
  classNames,
  width,
  height,
}: {
  colorCodes: string[];
  classNames?: string;
  width?: string;
  height?: string;
}) {
  return (
    <div className={cn(classNames, "flex flex-wrap gap-2")}>
      {colorCodes.map((color, index) => (
        <div
          key={index}
          className={cn(
            width ? width : "w-6",
            height ? height : "h-6",
            "rounded-full hover:scale-110 cursor-pointer"
          )}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}
