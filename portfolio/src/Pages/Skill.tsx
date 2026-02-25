"use client";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../components/ui/glowing-stars";

import { SiReact, SiTailwindcss,  SiJavascript, SiTypescript , SiNodedotjs , SiVite  , SiHtml5 , SiCss, SiSass, SiExpress , SiApifox , SiPostman , SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiRedis, 
  SiFirebase , SiJsonwebtokens , SiGithub , SiFigma } from '@icons-pack/react-simple-icons';
import { Button } from "../components/ui/moving-border";
import { Timeline } from "@/components/ui/timeline";




function Skill() {
    

    return (
        <main className="bg-black flex-1 overflow-hidden   flex flex-col  max-w-screen min-w-screen">
 <div className="flex  h-100  max-w-screen items-center justify-center  md:mb-10 sm:mb-10 lg:mb-10 xl:mb-0 ">
      <GlowingStarsBackgroundCard  >
        <GlowingStarsTitle className="text-pink-600 text-4xl ">About Needhi</GlowingStarsTitle>
        <div className="flex justify-center items-center w-screen ">
          <GlowingStarsDescription className="text-white text-md  ">
            I’m a 2025 Computer Engineering graduate with a strong passion for building things and solving real-world problems through code. I enjoy turning ideas into functional systems and continuously sharpening my skills. Currently, I’m diving deep into blockchain and crypto technologies, exploring how decentralized systems can shape the future of tech.
          </GlowingStarsDescription>
          {/* <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            
          </div> */}
        </div>
      </GlowingStarsBackgroundCard>
    </div>
    
    <div className="">
<hr className="border-t-2 border-blue-500 w-full md:mt-15 mt-15 lg:mt-15 xl:mt-0 " />
      <h1 className="text-white text-3xl py-3">Tech Stack</h1>
      <hr className="border-t-2 border-blue-500 w-full " />
   <div className="grid xl:grid-cols-2  gap-2 justify-between md:grid-cols-1 sm:grid-cols-1  lg:grid-cols-1  ">
    <div className="">
<h1 className="text-white text-xl py-3">Fronted Technologies</h1>
      <div className="grid grid-cols-3  mt-3">

        <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      ><SiReact size={25} color="default" title="React" /><h1 className="py-2 px-2 text-white">React</h1> </Button></div>
        <div className=" m-2 flex justify-center text-center">
          <Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      ><SiTypescript size={25} color="default" title="TypeScript" /><h1 className="py-2 px-1 text-white">TypeScript</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      > <SiVite size={25} color="default" title="Vite" /><h1 className="py-2 px-1 text-white">Vite</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      ><SiTailwindcss size={25} color="default" title="Tailwind" /><h1 className="py-2  px-2 text-white">Tailwind</h1></Button></div>
        <div className="m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      ><SiJavascript size={25} color="default" title="JavaScript" /><h1 className="p-2 text-white">JavaScript</h1></Button></div>
     
      <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      > <SiHtml5 size={25} color="default" title="HTML5" /><h1 className="py-2 px-2 text-white">HTML5</h1> </Button></div>
       <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      > <SiCss size={25} color="default" title="CSS3" /><h1 className="py-2 px-2 text-white">CSS3</h1> </Button></div>
       <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      >  <SiSass size={25} color="default" title="Sass/SCSS" /><h1 className="py-2 px-2 text-white">Sass</h1> </Button></div>
       
      </div>
      
      </div>
      
      <div>
<h1 className="text-white text-xl py-3">Backed Technologies</h1>
  <div className="grid grid-cols-3  mt-3">
        <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      >  <SiPostman size={25} color="default" title="RESTful APIs" /><h1 className="p-2 text-white">RESTful APIs</h1> </Button></div>
        <div className=" m-2 flex justify-center text-center">
          <Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      > <SiExpress size={25} color="white" title="Express.js" /><h1 className="p-2 text-white">Express.js</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      ><SiNodedotjs size={25} color="default" title="Node.js" /><h1 className="p-2 text-white">Node.js</h1></Button></div>
       
        <div className="m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      ><SiJavascript size={25} color="default" title="JavaScript" /><h1 className="p-2 text-white">JavaScript</h1></Button></div>
      </div>
      </div>
          <div>
<h1 className="text-white text-xl py-3">Database & Storage</h1>
  <div className="grid grid-cols-3  mt-3">
        <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      ><SiMongodb size={25} color="default" title="MongoDB" /><h1 className="p-2 text-white">MongoDB</h1> </Button></div>
        <div className=" m-2 flex justify-center text-center">
          <Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      > <SiMysql size={35} color="white" title="MySQL" /><h1 className="p-2 text-white">MySQL</h1></Button></div>
        <div className=" m-2 flex justify-center text-center"><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      > <SiJsonwebtokens size={30} color="default" title="JSON" /><h1 className="p-2 text-white">JSON</h1></Button></div>
       
      </div>
      </div>
         <div className="">
<h1 className="text-white text-xl py-3">Software & Tools</h1>
      <div className="grid grid-cols-3  mt-3">

        <div className=" m-2  flex justify-center text-center  "><Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      > <SiGithub size={30} color="white" title="Git/GitHub" /><h1 className="p-2 text-white">GitHub</h1> </Button></div>
        <div className=" m-2 flex justify-center text-center">
          <Button
        borderRadius="1.75rem"
        className="bg-pink-800 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm "
      ><SiFigma size={30} color="default" title="Figma" /><h1 className="p-2 text-white">Figma</h1></Button></div>
        
      </div>
      </div>
   </div>
    </div>
<div>  
       <hr className="border-t-2 border-blue-500 w-screen mx-auto mt-5" />
      <h1 className="text-white text-3xl py-3">Experience Of Work</h1>
      <hr className="border-t-2 border-blue-500 w-screen mx-auto" />
      <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>  

    
</div>
    
        </main>
    )
}

export default Skill

const data = [
    {
      title: "June -  2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          worked as research intern at DAIICT
          </p>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
    {
      title: "January - 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Wroed at react js intern at Brainy-Beam Infotech , Ahmedabad
          </p>
        
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "2021-2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            did my bachelor of engineering in computer science from SVIT , Vasad
          </p>
          <div className="mb-8">
           
          </div>
          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },
  ];