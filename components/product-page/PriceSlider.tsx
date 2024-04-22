"use client";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export function PriceSlider({ className, ...props }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      <Slider
        defaultValue={[0]}
        max={10000}
        step={1000}
        className={cn("w-[80%] max-w-[225px]", className)}
        {...props}
        onValueChange={(value) => setSliderValue(value[0])}
      />
      <h1 className="mt-3">
        {sliderValue > 0 ? "Less than " + "Rs:" + sliderValue : "All price"}
      </h1>
    </>
  );
}
