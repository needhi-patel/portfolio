
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'



function Layout() {


    return (
       <div  className='flex flex-col min-h-screen overflow-hidden w-screen '>
       <Navbar/>
       <Outlet/>
       </div> 
    )
}

export default Layout
