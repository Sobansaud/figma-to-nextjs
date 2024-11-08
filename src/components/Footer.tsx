import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div >
      <footer className="bg-blue-950 text-white pt-32 pb-6">
        <div className="flex items-center justify-evenly pb-48">
          <div>
            <Image className="pb-6" src="/Logo.png" alt="logo" width={170} height={170} />
            <p>
              whitepace was created for  <br />
              the new ways we live and <br />
               work. We make a
              better  
              <br />workspace around the world
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl">Products</h1>
            <p className="pt-6 text-yellow-100">Overview</p>
            <p className="pt-2">Pricing</p>
            <p className="pt-2">Costumer Stories</p>
          </div>
          <div>
          <h1 className="font-bold text-xl">Resources</h1>
            <p className="pt-6 ">Blog</p>
            <p className="pt-2">Guide & tutorials</p>
            <p className="pt-2">Help centre</p>
          </div>
          <div><h1 className="font-bold text-xl">Company</h1>
            <p className="pt-6 ">About us</p>
            <p className="pt-2">Careers</p>
            <p className="pt-2">Media Kit</p></div>
          <div>
            <h1 className="font-bold text-2xl">Try it Today</h1>
            <p className="pt-6">Get started for free. <br />
            Add your whole team as your needs grow.</p>
            <button className="bg-blue-300 mt-6 rounded-md px-2 pt-1 pb-1">Start Today</button>
          </div>
        </div>

        <div className="flex  justify-around border-t-2 border-yellow-100 pt-6 ">
            <div className="flex gap-10  ">
                <h1>English</h1>
                <h1>Terms & Privacy</h1>
                <h1>Security</h1>
                <h1>status</h1>
                <h1>2021 Whitepace LLC</h1>
            </div>
            <div>
                <Image src="/Social Icon.png" alt="icons " width={100} height={100}/>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;