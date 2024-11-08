import React from "react";

function Exten() {
  return (
    <div>
      <div className="bg-blue-950 text-white">
        <div className="flex items-center justify-evenly ">
          <div>
            <h1 className="font-bold text-5xl mb-5">Use as Extension</h1>
            <p className="text-sm mb-10">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages <br /> or take screenshots as notes.
            </p>
            <button className="bg-blue-400 rounded-md p-3">Let's Go</button>
          </div>
          <div className="w-[400px] min-h-[300px] bg-blue-300 mt-12 mr-20 mb-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Exten;