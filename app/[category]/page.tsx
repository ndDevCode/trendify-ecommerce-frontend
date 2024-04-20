import Categories from "@/components/home-page/Categories";
import React from "react";
import { cn } from "@/lib/utils";
import { Montserrat } from "@/lib/fonts";

import ProductCard from "@/components/common/ProductCard";

import category1 from "@/public/images/categories/Ellipse 6.png";
import category2 from "@/public/images/categories/Ellipse 7.png";
import category3 from "@/public/images/categories/Ellipse 8.png";
import category4 from "@/public/images/categories/Ellipse 9.png";
import category5 from "@/public/images/categories/Ellipse 10.png";
import category6 from "@/public/images/categories/Group 8.png";

import productImg1 from "@/public/images/products/product-1.png";
import productImg2 from "@/public/images/products/product-2.png";
import productImg4 from "@/public/images/products/product-4.png";
import productImg5 from "@/public/images/products/product-5.png";
import productImg6 from "@/public/images/products/product-6.png";
import productImg7 from "@/public/images/products/product-7.png";
import productImg8 from "@/public/images/products/product-8.png";
import productImg9 from "@/public/images/products/product-9.png";
import productImg3 from "@/public/images/products/product-3.png";
import { PageCount } from "@/components/product-page/PageCount";

const categories = [
  { img: category1, title: "Spring & Summer 2024" },
  { img: category2, title: "Stylist's Choice" },
  { img: category3, title: "T-shirt" },
  { img: category4, title: "Shirt" },
  { img: category5, title: "Dresses" },
  { img: category6, title: "Sale" },
];

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

function ProductPage({ params }: { params: { category: string } }) {
  return (
    <>
      {/* ------------------------ Header Title ------------------------- */}
      <h1
        className={cn(
          Montserrat.className,
          "font-extrabold text-5xl mt-32 mb-8"
        )}
      >
        {params.category} &apos;s Clothing
      </h1>

      {/* ----------- Sub Categories related to Main Category ----------- */}
      <Categories data={categories} />

      {/* ------------------------ Product Section ---------------------- */}
      <div className="grid lg:grid-cols-12 my-16">
        {/* ---------------------- Filter Section ----------------------- */}

        <div className="lg:col-span-3 mr-2">
          {/* -------------------- Sorting ------------------------------ */}
          <h1
            className={cn(
              Montserrat.className,
              "text-lg border-b-2 font-semibold p-4 mb-2 bg-gray-200 rounded-xl"
            )}
          >
            Sort By
          </h1>
          <div>
            <FilterHeading name="Rating" />
          </div>
          <div>
            <FilterHeading name="Price" />
          </div>

          {/* -------------------- Filters ------------------------------ */}
          <h1
            className={cn(
              Montserrat.className,
              "text-lg border-b-2 font-semibold p-4 my-2 bg-gray-200 rounded-xl"
            )}
          >
            Filter By
          </h1>
          <div>
            <FilterHeading name="Category" />
          </div>
          <div>
            <FilterHeading name="Product Status" />
          </div>
          <div>
            <FilterHeading name="Rating" />
          </div>
          <div>
            <FilterHeading name="Discount" />
          </div>
          <div>
            <FilterHeading name="Price" />
          </div>
          <div>
            <FilterHeading name="Size" />
          </div>
          <div>
            <FilterHeading name="Color" />
          </div>
        </div>
        <div className="lg:col-span-9">
          {/* ------------------ Product Count per page ----------------- */}
          <div className="flex items-end justify-end">
            <PageCount />
          </div>
          {/* ------------------------- Products ------------------------ */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 min-[1080px]:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center"
              >
                <ProductCard prop={product} className="self-center" />
              </div>
            ))}
          </div>
          {/* ------------------------ Pagination ----------------------- */}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

function FilterHeading({
  name,
  classNames,
}: {
  name: string;
  classNames?: string;
}) {
  return (
    <h1
      className={cn(Montserrat.className, "text-md border-b-2 font-semibold")}
    >
      {name}
    </h1>
  );
}
