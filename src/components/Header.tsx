import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-evenly bg-blue-950 pt-5 pb-5">
        <Image src="/logo.png" alt="logo" width={150} height={120} />
        <div>
          <nav>
            <ul className="flex gap-10 text-white">
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricising</li>
              <div className="px-10">
                <button className="bg-yellow-200 text-blue-950 rounded-md mr-2 p-[5px]">
                  Login
                </button>
                <button className="bg-blue-400 rounded-md p-[6px]">
                  
                  Try Whitepace free
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;