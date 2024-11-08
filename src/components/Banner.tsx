import React from "react";
// import Image from "next/image";

function Banner() {
  return (
    <div>
      <div className="bg-blue-950 text-white">
        <div className="flex items-center justify-evenly  bg-[url('/public/element.png')]bg-no-repeat bg-cover">
          <div>
            <h1 className="font-bold text-5xl mb-5">
              Get More Done with <br /> whitespace
            </h1>
            <p className="text-sm mb-10">
              Project management software that enables your teams to
              collaborate, plan, <br /> analyze and manage everyday tasks
            </p>
            <button className="bg-blue-400 rounded-md p-3">
              Try Whitespace free
            </button>
          </div>
          <div className="w-[500px] min-h-[300px] bg-blue-300 mt-20 mr-20 mb-32"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;