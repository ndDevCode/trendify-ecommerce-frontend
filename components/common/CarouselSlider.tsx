import * as React from "react";

import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSlider({ products }: any) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {products.map((product: any) => (
          <CarouselItem
            key={product.id}
            className="basis-full md:basis-1/2 min-[1140px]:basis-1/3 flex items-center justify-center p-0"
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-black text-white scale-125 hover:scale-150 duration-700" />
      <CarouselNext className="bg-black text-white scale-125 hover:scale-150 duration-700" />
    </Carousel>
  );
}
