import React from "react";
import Image from "next/image";
function Favour() {
  return (
    <div>
      <div className="bg-blue-950 text-white">
        <div className="flex items-center justify-evenly pt-16 pb-16">
          <Image src="/Apps.png" alt="apps" width={400} height={400}/>
          <div>
            <h1 className="font-bold text-5xl mb-5">
              Work with Your <br /> Favorite Apps Using <br />
              whitepace
            </h1>
            <p className="text-sm mb-10">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to <br /> have all the tools you need
              for your project success.
            </p>
            <button className="bg-blue-400 rounded-md p-3">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favour;