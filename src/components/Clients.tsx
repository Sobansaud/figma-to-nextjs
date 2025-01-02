
import React from "react";
import Image from "next/image";

function Clients() {
  return (
    <div>
      <section>
        <h1 className="font-bold text-xl md:text-3xl mt-8 mb-6 text-center">
          What Our Clients Say
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-[300px] md:w-[400px] h-auto bg-blue-300 shadow-2xl p-5"
            >
              <Image
                src={`/Quote-${item}.png`}
                alt="quote"
                width={60}
                height={60}
                className="m-auto"
              />
              <p className="px-6 pt-6 border-b-2 pb-10 border-black text-sm">
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
              <div className="flex items-center mt-4">
                <Image
                  src={`/Avater-${item}.png`}
                  alt="avatar"
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <div>
                  <h1 className="font-bold">Oberon Shaw, MCH</h1>
                  <p className="text-xs">
                    Head of Talent Acquisition, North America
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Image
          className="m-auto mb-12"
          src="/slider.png"
          alt="slider"
          width={50}
          height={50}
        />
      </section>
    </div>
  );
}

export default Clients;
