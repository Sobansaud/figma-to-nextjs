import React from "react";
import Image from "next/image";







function Footer() {
  return (
    <div>
      <footer className="bg-blue-950 text-white pt-16 pb-6">
        <div className="flex flex-col md:flex-row items-start justify-evenly pb-16">
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <Image className="pb-6 mx-auto md:mx-0" src="/Logo.png" alt="logo" width={170} height={170} />
            <p>
              Whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>
          <div className="text-center md:text-left mb-10 md:mb-0">
            <h1 className="font-bold text-xl">Products</h1>
            <p className="pt-6">Overview</p>
            <p className="pt-2">Pricing</p>
            <p className="pt-2">Customer Stories</p>
          </div>
          <div className="text-center md:text-left mb-10 md:mb-0">
            <h1 className="font-bold text-xl">Resources</h1>
            <p className="pt-6">Blog</p>
            <p className="pt-2">Guide & Tutorials</p>
            <p className="pt-2">Help Centre</p>
          </div>
          <div className="text-center md:text-left mb-10 md:mb-0">
            <h1 className="font-bold text-xl">Company</h1>
            <p className="pt-6">About Us</p>
            <p className="pt-2">Careers</p>
            <p className="pt-2">Media Kit</p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-bold text-2xl">Try it Today</h1>
            <p className="pt-6">
              Get started for free. <br /> Add your whole team as your needs grow.
            </p>
            <button className="bg-blue-300 mt-6 rounded-md px-4 py-2">Start Today</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-yellow-100 pt-6">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <h1>English</h1>
            <h1>Terms & Privacy</h1>
            <h1>Security</h1>
            <h1>Status</h1>
            <h1>&copy; 2021 Whitepace LLC</h1>
          </div>
          <div className="mt-4 md:mt-0">
            <Image src="/Social Icon.png" alt="icons" width={100} height={100} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer