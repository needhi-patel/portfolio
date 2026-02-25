import {  NavLink} from 'react-router-dom'
import needhi from '../assets/needhi.png'
import './home.css'
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card'
import { motion } from "motion/react";
import { AuroraBackground } from "../components/ui/aurora-background";


function Home() {


    return (
      <AuroraBackground className='h-full max-w-screen' >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-0 items-center justify-center  px-4"
      >
        <main className="  flex gap-1 flex-col md:flex-row overflow-hidden  items-center justify-center h-full w-full  m-2 p-2">



 <div className=' w-full  flex-1 flex flex-col items-center justify-center   '>
                   <CardContainer className="inter-var bg-gradient-to-br from-black to-gray-500 rounded-full  h-99 w-95 xl:h-110 xl:w-100">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto  p-6   ">
        
        <CardItem
          translateZ="100"
          rotateX={10}
          rotateZ={-5}
          className="w-90 h-80  flex items-center justify-center   "
        >
          <img
            src={needhi}
            height="100"
            width="100"
            className="h-120 w-100  pb-1 object-cover xl:h-120 xl:w-130   "
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>

                
                </div>

            <div  className='h-full   flex-1 flex flex-col items-center justify-center  w-full  m-2 p-2'>
                <div id="container"    >
                    Hello I AM NEEDHI
                    <div id="flip" >
                        <div><div>CREATOR</div></div>
                        <div><div>Developer</div></div>
                        <div><div>Desinger</div></div>


                    </div>

                </div>


                
                <p className='text-center   text-white text-l   xl:text-xl xl:m-5 '  >I design what people notice, build what actually works, and write so it all makes sense.If it looks good, runs smoothly, and sounds right, I’ve done my job...</p>



                <h1 className='text-center text-blue-500 text-3xl my-2 xl:text-3xl xl:mt-1 xl:mb-2'>  Hire Me As</h1>


                <div className='flex items-center flex-row justify-center gap-3 mx-3  '>

              <NavLink to="/Design" className="cursor-pointer"><div className='bg-blue-400 p-2 rounded-xl hover:bg-blue-500'>  <h1 className='text-2xl'>Designer</h1> </div></NavLink>
                    <NavLink to="/Developer" className="cursor-pointer"><div className='bg-blue-400 p-2 rounded-xl hover:bg-blue-500'><h1 className='text-2xl'>Developer</h1></div></NavLink>
                    <NavLink to="/Writter" className="cursor-pointer"><div className='bg-blue-400 p-2 rounded-xl hover:bg-blue-500'><h1 className='text-2xl'>Writer</h1></div></NavLink>
                </div>

            </div>
           
                 

        </main>
        </motion.div>
    </AuroraBackground>
    )
}

export default Home
