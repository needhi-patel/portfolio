
"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function Writter() {
    

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

export default Writter

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

