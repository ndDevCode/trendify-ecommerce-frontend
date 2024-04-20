import Categories from "@/components/home/Categories";
import React from "react";

function ProductPage({ params }: { params: { category: string } }) {
  return (
    <>
      <Categories />
      <div className="grid lg:grid-cols-12">
        <div className="col-span-3">hello</div>
        <div className="col-span-9">hello</div>
      </div>
    </>
  );
}

export default ProductPage;
