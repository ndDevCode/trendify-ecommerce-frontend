"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "@/lib/fonts";

import SocialImg1 from "@/public/images/social/social-1.png";
import SocialImg2 from "@/public/images/social/social-2.png";
import SocialImg3 from "@/public/images/social/social-3.png";
import SocialImg4 from "@/public/images/social/social-4.png";
import SocialImg5 from "@/public/images/social/social-5.png";
import SocialImg6 from "@/public/images/social/social-6.png";
import SocialImg7 from "@/public/images/social/social-7.png";
import SocialImg8 from "@/public/images/social/social-8.png";
const imageList = [
  SocialImg1,
  SocialImg2,
  SocialImg3,
  SocialImg4,
  SocialImg5,
  SocialImg6,
  SocialImg7,
  SocialImg8,
  SocialImg1,
];

export default function SocialMediaClicks() {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <>
      <h1
        className={cn(
          Montserrat.className,
          "text-xl sm:text-3xl mb-12 bg-gradient-to-t from-black to-gray-700 bg-clip-text text-transparent"
        )}
      >
        @TRENDIFY
      </h1>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="relative flex justify-center items-center w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row flex-wrap"
      >
        {imageList.map((image, i) => (
          <motion.div
            key={i}
            variants={i % 2 == 1 ? first : second}
            className={cn(
              i % 2 == 2 ? `relative z-20` : ``,
              "rounded-2xl bg-white p-4 dark:bg-black flex flex-col items-center justify-center"
            )}
          >
            <Image
              src={image}
              alt="social media image"
              height="280"
              width="280"
              className="rounded-2xl"
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
