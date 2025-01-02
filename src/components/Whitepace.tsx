import React from "react";
import Image from "next/image";
function Whitepace() {
  return (
    <div className="bg-blue-950 text-white px-4 md:px-8 lg:px-16">
      <section>
        <div className="text-center py-10 md:py-32">
          <h1 className="font-bold text-2xl md:text-4xl">Try Whitepace Today</h1>
          <p className="pt-4 md:pt-6">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="bg-blue-300 px-4 py-2 rounded-md mt-6">
            Try Taskey Free
          </button>
          <h1 className="pt-6 md:pt-10">On a big team? Contact sales</h1>
          <Image
            className="m-auto mt-6 md:mt-10 pb-10"
            src="/App-icon.png"
            alt="app-icon"
            width={120}
            height={120}
          />
        </div>
      </section>
    </div>
  );
}

export default Whitepace;