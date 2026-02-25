import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout'
import {  Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'   
import Design from './Pages/Design'
import Developer from './Pages/Developer'
import Writter from './Pages/Writter'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='Skill' element={<Skill/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Design' element={<Design/>}/>
    <Route path='Developer' element={<Developer/>}/>
    <Route path='Writter' element={<Writter/>}/>

  </Route>
))


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
