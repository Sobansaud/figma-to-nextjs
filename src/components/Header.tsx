import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-blue-950 py-5 px-10">
        <Image src="/logo.png" alt="logo" width={200} height={120} className="mx-auto md:mx-0" />
        <nav className="mt-5 md:mt-0">
          <ul className="flex flex-wrap gap-6 md:gap-10 text-white text-center md:text-left">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <div className="flex gap-4 mt-5 md:mt-0">
          <button className="bg-yellow-200 text-blue-950 rounded-md px-4 py-2">Login</button>
          <button className="bg-blue-400 rounded-md px-4 py-2">Try Whitepace Free</button>
        </div>
      </div>
    </div>
  );
}


export default Header;