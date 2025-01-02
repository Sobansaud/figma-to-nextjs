  
import React from "react";

function Costomise() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="w-[300px] md:w-[400px] min-h-[200px] md:min-h-[300px] bg-blue-300 mt-10 mb-10"></div>
        <div className="text-center md:text-left p-5">
          <h1 className="font-bold text-3xl md:text-5xl mb-5">
            Costomise it to <br /> your needs
          </h1>
          <p className="text-sm mb-10">
            Customise the app with plugins, custom themes, and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <button className="bg-blue-400 rounded-md p-3">Let's Go</button>
        </div>
      </div>
    </div>
  );
}

export default Costomise;



