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

export function PageCount() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] rounded-xl backdrop-blur-lg">
        <SelectValue placeholder="Products Per Page" />
      </SelectTrigger>
      <SelectContent className="backdrop-blur-lg rounded-xl">
        <SelectGroup>
          <SelectLabel>Products/Page</SelectLabel>
          <SelectItem value="12" className="cursor-pointer">
            12 Prod/Page
          </SelectItem>
          <SelectItem value="24" className="cursor-pointer">
            24 Prod/Page
          </SelectItem>
          <SelectItem value="48" className="cursor-pointer">
            48 Prod/Page
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
