"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function Design() {
    

    return (
   <div className="h-screen relative w-full bg-black flex flex-col  overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
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
      <h1 className="md:text-2xl text-3xl m-3 lg:text-2xl font-bold text-center text-white relative z-20">
        Design great products
      </h1>
      <p className="text-white text-center relative z-20 m-2">Designing  products that make a difference</p>

      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>

    </div>
    )
}

export default Design

export const projects = [
  {
    title: "Flower Shop",
    description:
      <img src="src/assets/flower-shop.png" alt="Flower Shop" className="w-full h-full" />,
    link: "https://apparent-workshops-267821.framer.app/",
  },
  {
    title: "tech ideas",
    description:
      <img src="src/assets/tech-idea.png" alt="tech ideas" className="w-full h-full" />,
    link: "https://moody-football-721091.framer.app/",
  },
  {
    title: "Blood Donor App",
    description:
      <img src="src/assets/blood-donor.png" alt="Blood Donor App" className="w-full h-full" />,
    link: "https://blood-donor-app.framer.app/",
  },
 
];
