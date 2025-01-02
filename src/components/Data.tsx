
import React from "react";
import Image from "next/image";

function Data() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center p-5">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-xl md:text-3xl">100% your data</h1>
          <p className="pt-6 text-sm md:text-base">
            The app is open source, and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no one but yourself can
            access them.
          </p>
          <button className="bg-blue-300 pt-1 pb-1 px-2 rounded-sm mt-6">
            Read more
          </button>
        </div>
        <div className="mt-10 md:mt-0">
          <Image src="/element-2.png" alt="pic" width={300} height={300} />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h1 className="font-bold text-xl md:text-3xl">Our sponsors</h1>
        <Image
          className="mt-10"
          src="/sponsors.png"
          width={400}
          height={150}
          alt="sponsors"
        />
      </div>
    </div>
  );
}

export default Data;
