"use client";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../components/ui/glowing-stars";

import { SiReact, SiTailwindcss,  SiJavascript, SiTypescript , SiNodedotjs } from '@icons-pack/react-simple-icons';
import { Button } from "../components/ui/moving-border";





function Skill() {
    

    return (
        <main className="bg-black flex-1 overflow-hidden   flex flex-col  max-w-screen min-w-screen">
 <div className="flex  h-100  max-w-screen items-center justify-center  ">
      <GlowingStarsBackgroundCard >
        <GlowingStarsTitle className="text-pink-600 text-4xl ">About Needhi</GlowingStarsTitle>
        <div className="flex justify-center items-center w-screen ">
          <GlowingStarsDescription className="text-white text-md ">
            I’m a 2025 Computer Engineering graduate with a strong passion for building things and solving real-world problems through code. I enjoy turning ideas into functional systems and continuously sharpening my skills. Currently, I’m diving deep into blockchain and crypto technologies, exploring how decentralized systems can shape the future of tech.
          </GlowingStarsDescription>
          {/* <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            
          </div> */}
        </div>
      </GlowingStarsBackgroundCard>
    </div>
    
    <div className="">
<hr className="border-t-2 border-blue-500 w-full " />
      <h1 className="text-white text-3xl py-3">Tech Stack</h1>
      <hr className="border-t-2 border-blue-500 w-full " />
   <div className="grid grid-cols-2  gap-2 justify-between">
    <div className="">
<h1 className="text-white text-xl py-3">Fronted Technologies</h1>
      <div className="grid grid-cols-3  mt-3">

        <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiReact size={30} color="default" title="React" /><h1 className="p-2 text-white">React</h1> </Button></div>
        <div className=" m-2 flex justify-center text-center">
          <Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiTypescript size={30} color="default" title="TypeScript" /><h1 className="p-2 text-white">TypeScript</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiNodedotjs size={30} color="default" title="Node.js" /><h1 className="p-2 text-white">Node.js</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiTailwindcss size={30} color="default" title="Tailwind" /><h1 className="p-2 text-white">Tailwind</h1></Button></div>
        <div className="m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiJavascript size={30} color="default" title="JavaScript" /><h1 className="p-2 text-white">JavaScript</h1></Button></div>
      </div>
      </div>
      <div>
<h1 className="text-white text-xl py-3">Backed Technologies</h1>
  <div className="grid grid-cols-3  mt-3">
        <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiReact size={30} color="default" title="React" /><h1 className="p-2 text-white">React</h1> </Button></div>
        <div className=" m-2 flex justify-center text-center">
          <Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiTypescript size={30} color="default" title="TypeScript" /><h1 className="p-2 text-white">TypeScript</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiNodedotjs size={30} color="default" title="Node.js" /><h1 className="p-2 text-white">Node.js</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiTailwindcss size={30} color="default" title="Tailwind" /><h1 className="p-2 text-white">Tailwind</h1></Button></div>
        <div className="m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiJavascript size={30} color="default" title="JavaScript" /><h1 className="p-2 text-white">JavaScript</h1></Button></div>
      </div>
      </div>
          <div>
<h1 className="text-white text-xl py-3">Database & Storage</h1>
  <div className="grid grid-cols-3  mt-3">
        <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiReact size={30} color="default" title="React" /><h1 className="p-2 text-white">React</h1> </Button></div>
        <div className=" m-2 flex justify-center text-center">
          <Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiTypescript size={30} color="default" title="TypeScript" /><h1 className="p-2 text-white">TypeScript</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiNodedotjs size={30} color="default" title="Node.js" /><h1 className="p-2 text-white">Node.js</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiTailwindcss size={30} color="default" title="Tailwind" /><h1 className="p-2 text-white">Tailwind</h1></Button></div>
        <div className="m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiJavascript size={30} color="default" title="JavaScript" /><h1 className="p-2 text-white">JavaScript</h1></Button></div>
      </div>
      </div>
         <div className="">
<h1 className="text-white text-xl py-3">Fronted Technologies</h1>
      <div className="grid grid-cols-3  mt-3">

        <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiReact size={30} color="default" title="React" /><h1 className="p-2 text-white">React</h1> </Button></div>
        <div className=" m-2 flex justify-center text-center">
          <Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiTypescript size={30} color="default" title="TypeScript" /><h1 className="p-2 text-white">TypeScript</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiNodedotjs size={30} color="default" title="Node.js" /><h1 className="p-2 text-white">Node.js</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiTailwindcss size={30} color="default" title="Tailwind" /><h1 className="p-2 text-white">Tailwind</h1></Button></div>
        <div className="m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl "
      ><SiJavascript size={30} color="default" title="JavaScript" /><h1 className="p-2 text-white">JavaScript</h1></Button></div>
      </div>
      </div>
   </div>
    </div>

       <hr className="border-t-2 border-blue-500 w-screen mx-auto mt-5" />
      <h1 className="text-white text-3xl py-3">Experience Of Work</h1>
      <hr className="border-t-2 border-blue-500 w-screen mx-auto" />  

    

    
        </main>
    )
}

export default Skill
