"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function Developer() {
    

    return (
   <div className="h-full relative w-full bg-black flex flex-col  overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-2xl text-2xl m-2 lg:text-2xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
      <p className="text-white text-center relative z-20">Designing and building products that make a difference</p>

      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>

    </div>
    )
}

export default Developer

export const projects = [
  {
    title: "Portfolio",
    description:
      <video src="src/assets/portfolio.mp4" controls className="w-full h-full" />,
    link: "https://github.com/needhi-patel/portfolio",
  },
  {
    title: "PassWord Generator",
    description:
      <video src="src/assets/password.mp4" controls className="w-full h-full" />,
    link: "https://github.com/needhi-patel/proj",
  },
  {
    title: "Blood Donor App",
    description:
      <video src="src/assets/blood-donor-vid.mp4" controls className="w-full h-full" />,
    link: "https://blood-donor-app.framer.app/",
  },
  {
    title: "Edge Computing Research Work",
    description:
      <video src="src/assets/cloud-work.mp4" controls className="w-full h-full" />,
    link: "https://github.com/needhi-patel/research-work",
  },
 
];

