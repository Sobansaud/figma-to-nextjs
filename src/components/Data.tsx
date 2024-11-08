import React from "react";
import Image from "next/image";

function Data() {
  return (
    <div>
      <div className="pt-20 flex justify-center">
        <div>
          <h1 className="font-bold text-3xl">100% your data</h1>
          <p className="pt-10">
            The app is open source and your notes are saved to an open format,
            so you'll always have access <br /> to them. Uses End-To-End
            Encryption (E2EE) to secure your notes and ensure no-one but <br />{" "}
            yourself can access them.
          </p>
          <button className="bg-blue-300 pt-1 pb-1 px-2 rounded-sm mt-10">Read more</button>
        </div>
        <div>
          <Image src="/element-2.png" alt="pic" width={400} height={400} />
        </div>
      </div>

<div className="mt-36 text-center">
  <h1 className="font-bold text-3xl">Our sponsers</h1>
  <Image className="pt-28 m-auto pb-10" src='/sponsors.png' width={600} height={200} alt="sponsers"/>
</div>

    </div>
  );
}

export default Data;