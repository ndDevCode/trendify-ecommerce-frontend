import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Montserrat, Inter } from "@/lib/fonts";

import productImg from "@/public/images/products/product-1.png";
import ProductImg2 from "@/public/images/products/product-2.png";
import ProductImg3 from "@/public/images/products/product-3.png";
import FilterColors from "@/components/product-list-page/FilterColors";
import SizeSelector from "@/components/product-info-page/SizeSelector";

export default function page() {
  return (
    <div className="my-32 grid grid-cols-12">
      <div className="col-span-6 grid grid-cols-6">
        <div className="col-span-4">
          <Image src={productImg} alt="product image" height={585}></Image>
        </div>
        <div className="col-span-2 flex flex-col gap-1 justify-between">
          <Image src={ProductImg2} alt="product image" height={285} />
          <Image src={ProductImg3} alt="product image" height={285} />
        </div>
      </div>
      <div className={cn(Inter.className, "col-span-6 ml-10")}>
        <h1 className="text-3xl">Product Name</h1>
        <h1 className="text-xl mt-2">Product Description</h1>

        <h1 className="text-lg mt-6">Colors :</h1>
        <FilterColors
          colorCodes={["#FFEFAA", "#E5E5E5", "#E5F5E5", "#E5E5F5", "#00FF00"]}
          classNames="mt-2"
          width="w-10"
          height="h-10"
        />

        <h1 className="text-lg mt-6">Available Sizes :</h1>
        <SizeSelector
          sizes={["XS", "S", "M", "L", "XL", "XXL"]}
          classNames="mt-2"
        />
      </div>
    </div>
  );
}
