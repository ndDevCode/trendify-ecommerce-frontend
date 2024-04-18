import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DancingScript } from "@/lib/fonts";
import { Card, CardContent } from "@/components/ui/card";

export default function CollectionCard({ prop }: any) {
  return (
    <>
      <Card
        className="w-[330px] h-[330px] border-none shadow-none scale-75 hover:scale-[.80] sm:scale-90 sm:hover:scale-[.85] 
      duration-700 lg:scale-100 lg:hover:scale-95"
      >
        <CardContent className="p-0 overflow-hidden rounded-xl lg:aspect-none group-hover:opacity-75">
          <Image
            src={prop.imageSrc}
            alt={prop.imageAlt}
            width={330}
            height={330}
          />
        </CardContent>
      </Card>
      <div className="absolute bottom-3 sm:bottom-8">
        <h3
          className={cn(
            DancingScript.className,
            "text-md sm:text-4xl font-[1000] bg-clip-text text-transparent animate-shimmer",
            "bg-[linear-gradient(110deg,#dbdcd7,45%,#b8235a,55%,#1c1a27)] bg-[length:200%_100%] transition-colors duration-[10000S]"
          )}
        >
          {prop.name}
        </h3>
      </div>
    </>
  );
}

// background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%); // linear-gradient(110deg,#e3ffe7,45%,#d9e7ff,55%,#e3ffe7)
// background-image: linear-gradient(to right, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);
