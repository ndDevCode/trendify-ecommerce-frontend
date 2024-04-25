import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ProductPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="hover:bg-slate-200 rounded-xl">
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="hover:bg-slate-200 rounded-xl">
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hover:bg-slate-200 rounded-xl">
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="hover:bg-slate-200 rounded-xl">
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hover:bg-slate-200 rounded-xl">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hover:bg-slate-200 rounded-xl">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
