import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <div>

      <div className="bg-white ">
        <div className="flex items-center justify-evenly ">
          <div>
            <h1 className="font-bold text-5xl mb-5">
              Projects <br />
              Manegement
            </h1>
            <p className="text-sm mb-10">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and <br /> diagrams directly from the app. Take photos with
              the mobile app and save them  <br />to a note.
            </p>
            <button className="bg-blue-400 rounded-md p-3">
              Get Started
                </button>
          </div>
          <div className="w-[400px] min-h-[300px] bg-blue-300 mt-20 mr-20 mb-32"></div>
        </div>
      </div>
      
        <div className="flex items-center justify-evenly ">
          <Image className="pb-10" src='/together.png' alt="work-together" width={320} height={320}/>
          <div>
            <h1 className="font-bold text-5xl mb-5">
              Work together
            </h1>
            <p className="text-sm mb-10">
            With whitepace, share your notes with your colleagues and collaborate on them. <br />
You can also publish a note to the internet and share the URL with others.

            </p>
            <button className="bg-blue-400 rounded-md p-3">
              Try it now
                </button>
          </div>
        </div>



    </div>
  );
}

export default Projects;