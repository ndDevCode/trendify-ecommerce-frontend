import Link from "next/link";

import Categories from "@/components/home-page/Categories";
import TrendingProducts from "@/components/home-page/TrendingProducts";
import Hero from "@/components/home-page/Hero";
import Collections from "@/components/home-page/Collections";
import CollectionBanner from "@/components/common/CollectionBanner";

import category1 from "@/public/images/categories/Ellipse 6.png";
import category2 from "@/public/images/categories/Ellipse 7.png";
import category3 from "@/public/images/categories/Ellipse 8.png";
import category4 from "@/public/images/categories/Ellipse 9.png";
import category5 from "@/public/images/categories/Ellipse 10.png";
import category6 from "@/public/images/categories/Group 8.png";
import NewProducts from "@/components/home-page/NewProducts";
import SocialMediaClicks from "@/components/home-page/SocialMediaClicks";
import { cn } from "@/lib/utils";
import { Montserrat } from "@/lib/fonts";

const categories = [
  { img: category1, title: "Spring & Summer 2024" },
  { img: category2, title: "Stylist's Choice" },
  { img: category3, title: "T-shirt" },
  { img: category4, title: "Shirt" },
  { img: category5, title: "Dresses" },
  { img: category6, title: "Sale" },
];

export default function Home() {
  return (
    <>
      {/* ----------------- Hero Section -------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 mb-16">
        <Hero />
      </div>

      {/* ------------------- Categories -------------------- */}
      <div className="mb-16 px-14 font-bold">
        <Categories data={categories} />
      </div>

      {/* -------------------- Trending Products ------------ */}
      <div className="mb-16 px-14 font-bold group">
        <TrendingProducts />
      </div>

      {/* -------------------- Collections ------------------ */}
      <div className="mb-16 px-14 font-bold group">
        <Collections />
      </div>

      {/* --------------------- New Products ---------------- */}
      <div className="mb-16 px-14 font-bold">
        <NewProducts />
      </div>

      {/* ------------------- Collection Banner ------------- */}
      <div className="mb-16 px-14 font-bold">
        <h1
          className={cn(
            Montserrat.className,
            "text-xl sm:text-3xl bg-gradient-to-t from-black to-gray-700 bg-clip-text text-transparent"
          )}
        >
          Feature Collection
        </h1>
        <CollectionBanner />
      </div>

      {/* ------------------- Collection Banner ------------- */}
      <div className="mb-16 px-14 font-bold">
        <SocialMediaClicks />
      </div>
    </>
  );
}
