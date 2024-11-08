import React from "react";
import Image from "next/image";
function Plans() {
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="font-bold text-5xl">Choose Your Plan</h1>
        <p className="text-sm mt-8">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the <br />right plan for you.
        </p>
        <Image className="m-auto" src="/Price-list.png" alt="price-list" width={1000} height={1000}/>
      </div>
    </div>
  );
}

export default Plans;