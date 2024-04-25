"use client";

import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    // TODO : Make this good Loading Page
    <>
      <main className="grid min-h-dvh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#233784"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </main>
    </>
  );
}
