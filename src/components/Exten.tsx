
import React from "react";

function Exten() {
  return (
    <div className="bg-blue-950 text-white">
      <div className="flex flex-col md:flex-row items-center justify-evenly p-5">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl mb-5">Use as Extension</h1>
          <p className="text-sm mb-10">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="bg-blue-400 rounded-md p-3">Let's Go</button>
        </div>
        <div className="w-[300px] md:w-[400px] min-h-[200px] md:min-h-[300px] bg-blue-300 mt-10 mb-10"></div>
      </div>
    </div>
  );
}

export default Exten;
