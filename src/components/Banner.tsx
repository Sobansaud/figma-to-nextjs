
import React from "react";

function Banner() {
  return (
    <div className="bg-blue-950 text-white">
      <div className="flex flex-col md:flex-row items-center justify-evenly bg-[url('/element.png')] bg-no-repeat bg-cover">
        <div className="text-center md:text-left p-5">
          <h1 className="font-bold text-3xl md:text-5xl mb-5">
            Get More Done with <br /> whitespace
          </h1>
          <p className="text-xs md:text-sm mb-10">
            Project management software that enables your teams to collaborate,
            plan, <br className="hidden md:block" /> analyze, and manage everyday tasks
          </p>
          <button className="bg-blue-400 rounded-md p-3">Try Whitespace free</button>
        </div>
        <div className="w-[300px] md:w-[500px] min-h-[200px] md:min-h-[300px] bg-blue-300 mt-10 md:mt-20 md:mr-20 mb-10 md:mb-32"></div>
      </div>
    </div>
  );
}

export default Banner;





