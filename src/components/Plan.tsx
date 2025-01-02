import React from "react";
import Image from "next/image";

function Plans() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Choose Your Plan</h1>
        <p className="text-xs md:text-sm mt-4 md:mt-8">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
        <Image
          className="m-auto mt-8"
          src="/Price-list.png"
          alt="price-list"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}

export default Plans;