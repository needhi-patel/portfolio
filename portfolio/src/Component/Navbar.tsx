
import { NavLink} from 'react-router-dom'



function Navbar() {

    return (
        <nav className='  h-[10vh]  p-2  max-w-screen  shrink-0  bg-gradient-to-br from-black to-blue-300 backdrop-blur-md bg-white/30'>
            <div className='flex items-center justify-between  gap-5'>
                <div className='p-1 flex items-center '>
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-center text-3xl tracking-wider text-blue-500 pt-2 xl:text-4xl" : "text-center text-3xl tracking-wider text-blue-500 pt-2 xl:text-4xl"}>NEEDHI_HERE</NavLink>

                </div>
                <div className='flex items-center justify-between gap-4 ml-3 '>
            
                    <NavLink to="/Skill" className={({ isActive }) => isActive ? "text-lg text-yellow-400 xl:text-2xl" : "text-lg text-white xl:text-2xl"}>About</NavLink>
                    <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-lg text-yellow-400 xl:text-2xl" : "text-lg text-white xl:text-2xl"}>Contact</NavLink>
                        
                </div>
            </div>


        </nav>
    )
}

export default Navbar
