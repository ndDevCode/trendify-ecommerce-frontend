import * as React from "react";

import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  component: React.ElementType;
  items: any;
  classNames: string;
}

export function CarouselSlider(props: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full group"
    >
      <CarouselContent>
        {props.items.map((item: any) => (
          <CarouselItem
            key={item.id}
            className={
              "flex items-center justify-center p-0 " + `${props.classNames}`
            }
          >
            <props.component prop={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-black text-white scale-125 hover:scale-150 duration-700" />
      <CarouselNext className="bg-black text-white scale-125 hover:scale-150 duration-700" />
    </Carousel>
  );
}
