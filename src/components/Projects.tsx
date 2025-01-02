import React from "react";
import Image from "next/image";


function Projects() {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-evenly py-10">
        <div className="mb-8 lg:mb-0">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-5">
            Project Management
          </h1>
          <p className="text-sm md:text-base mb-6">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
          </p>
          <button className="bg-blue-400 rounded-md p-3">Get Started</button>
        </div>
        <div className="w-full lg:w-[400px] min-h-[200px] bg-blue-300 mt-5 lg:mt-0"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-evenly py-10">
        <Image
          className="mb-8 lg:mb-0"
          src="/together.png"
          alt="work-together"
          width={320}
          height={320}
        />
        <div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-5">
            Work Together
          </h1>
          <p className="text-sm md:text-base mb-6">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet
            and share the URL with others.
          </p>
          <button className="bg-blue-400 rounded-md p-3">Try it Now</button>
        </div>
      </div>
    </div>
  );
}

export default Projects