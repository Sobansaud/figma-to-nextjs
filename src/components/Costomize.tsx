import React from "react";

function Costomise() {
  return (
    <div>
      <div className="bg-white ">
        <div className="flex items-center justify-evenly ">
          <div className="w-[400px] min-h-[300px] bg-blue-300 mt-20 mb-20"></div>
          <div>
            <h1 className="font-bold text-5xl mb-5">
              Costomise it to <br /> your needs
            </h1>
            <p className="text-sm mb-10">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich <br />
              Text or Markdown). Or create your own scripts and plugins using
              the Extension API.
            </p>
            <button className="bg-blue-400 rounded-md p-3">Let's GO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Costomise;