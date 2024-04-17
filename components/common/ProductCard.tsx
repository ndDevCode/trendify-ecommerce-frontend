import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({ prop }: any) {
  return (
    <Card className="w-[280px] h-[480px] border-none shadow-none scale-90 sm:scale-100 hover:scale-95 duration-700">
      <CardContent className="w-[280px] h-[400px] p-0 overflow-hidden rounded-xl lg:aspect-none group-hover:opacity-75">
        <Image
          src={prop.imageSrc}
          alt={prop.imageAlt}
          width={280}
          height={400}
        />
      </CardContent>
      <CardFooter className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={prop.href}>{prop.name}</a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{prop.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{prop.price}</p>
      </CardFooter>
    </Card>
  );
}
