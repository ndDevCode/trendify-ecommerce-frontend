import React from "react";
import { CarouselSlider } from "../common/CarouselSlider";
import CollectionCard from "../common/CollectionCard";

import collectionImg1 from "@/public/images/collections/collection1.png";
import collectionImg2 from "@/public/images/collections/collection2.png";
import collectionImg3 from "@/public/images/collections/collection3.png";

const collections = [
  {
    name: "Spring and Summer",
    imageSrc: collectionImg1,
    imageAlt: "Spring and Summer",
  },
  {
    name: "Denim",
    imageSrc: collectionImg2,
    imageAlt: "Denim",
  },
  {
    name: "Swimwear",
    imageSrc: collectionImg3,
    imageAlt: "Swimwear",
  },
];

function Collections() {
  return (
    <>
      <h1 className="text-xl sm:text-3xl mb-8 bg-gradient-to-t from-black to-gray-700 bg-clip-text text-transparent">
        Collections
      </h1>
      <div>
        <CarouselSlider
          component={CollectionCard}
          items={collections}
          classNames="basis-full md:basis-1/2 min-[1280px]:basis-1/3"
        />
      </div>
    </>
  );
}

export default Collections;
