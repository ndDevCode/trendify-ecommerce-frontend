"use client";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export function DiscountSlider({ className, ...props }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      <Slider
        defaultValue={[0]}
        max={100}
        step={5}
        className={cn("w-[80%] max-w-[225px]", className)}
        {...props}
        onValueChange={(value) => setSliderValue(value[0])}
      />
      <h1 className="mt-3">
        {sliderValue > 0 ? "Less than " + sliderValue + "%" : "No Discount"}
      </h1>
    </>
  );
}
