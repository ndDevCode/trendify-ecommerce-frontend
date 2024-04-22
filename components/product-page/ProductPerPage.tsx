import * as React from "react";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductPerPage({ classNames }: { classNames: string }) {
  return (
    <Select>
      <SelectTrigger
        className={cn(classNames, "w-[130px] rounded-xl backdrop-blur-lg")}
      >
        <SelectValue placeholder="Show" />
      </SelectTrigger>
      <SelectContent className="backdrop-blur-lg rounded-xl">
        <SelectGroup>
          <SelectLabel>Products</SelectLabel>
          <SelectItem value="12" className="text-center cursor-pointer">
            12
          </SelectItem>
          <SelectItem value="24" className="cursor-pointer">
            24
          </SelectItem>
          <SelectItem value="48" className="cursor-pointer">
            48
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
