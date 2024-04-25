import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectBox({
  placeholder,
  label,
  items,
}: {
  placeholder: string;
  label: string;
  items: string[];
}) {
  return (
    <Select>
      <SelectTrigger className="w-[180px] rounded-xl">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="backdrop-blur-lg rounded-xl">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item, i) => (
            <SelectItem key={i} value={item} className="cursor-pointer">
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
