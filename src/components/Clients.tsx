import React from "react";
import Image from "next/image";
function Clients() {
  return (
    <div>
      <div>
        <section>
          <h1 className="font-bold text-3xl mt-8 mb-6 text-center">
            What Our Clients Says
          </h1>
          <div className="flex justify-around">
            <div className="w-[400px] h-[400px] bg-white mt-20 mb-20 shadow-2xl">
              <Image
                src="/Quote.png"
                alt="quote"
                width={100}
                height={100}
                className="pt-20 px-6"
              />
              <p className="px-6 pt-6 border-b-2 pb-10 border-black ">
                Whitepate is designed as a collaboration tool <br />
                for businesses that is a full project management <br />
                solution.
              </p>
              <div className="flex pt-4">
                <Image
                  className="pt-4 px-6"
                  src="/Avater.png"
                  alt="avater"
                  width={120}
                  height={120}
                />
                <div>
                  <h1 className="font-bold pt-4 ">Oberon Shaw, MCH</h1>
                  <p className="text-sm pt-2">
                    Head of Talent Acquisition, North <br /> America
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[400px] bg-blue-300 mt-20 mb-20 shadow-2xl">
              <Image
                src="/Quote-2.png"
                alt="quote"
                width={100}
                height={100}
                className="pt-20 px-6"
              />
              <p className="px-6 pt-6 border-b-2 pb-10 border-black ">
                Whitepate is designed as a collaboration tool <br /> for
                businesses that is a full project management <br /> solution.
              </p>
              <div className="flex pt-4">
                <Image
                  className="pt-4 px-6"
                  src="/Avater-2.png"
                  alt="avater"
                  width={120}
                  height={120}
                />
                <div>
                  <h1 className="font-bold pt-4 ">Oberon Shaw, MCH</h1>
                  <p className="text-sm pt-2">
                    Head of Talent Acquisition, North <br /> America
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[400px] bg-blue-300 mt-20 mb-20 shadow-2xl">
              <Image
                src="/Quote-2.png"
                alt="quote"
                width={100}
                height={100}
                className="pt-20 px-6"
              />
              <p className="px-6 pt-6 border-b-2 pb-10 border-black ">
                Whitepate is designed as a collaboration tool <br />
                for businesses that is a full project management <br />
                solution.
              </p>
              <div className="flex pt-4">
                <Image
                  className="pt-4 px-6"
                  src="/Avater-3.png"
                  alt="avater"
                  width={120}
                  height={120}
                />
                <div>
                  <h1 className="font-bold pt-4 ">Oberon Shaw, MCH</h1>
                  <p className="text-sm pt-2">
                    Head of Talent Acquisition, North <br /> America
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image className="m-auto mb-12" src="/slider.png" alt="slider " width={50} height={50}/>
        </section>
      </div>
    </div>
  );
}

export default Clients;