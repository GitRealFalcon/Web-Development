import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Footer from './components/Footer'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path:"/login",
      element: <><Navbar/><Login/><Footer/></>
    },
    {
      path:"/about",
      element: <><Navbar/><About/><Footer/></>
    },
    {
      path:"/contact",
      element: <><Navbar/><Contact/><Footer/></>
    },
    {
      path:"/user/:username",
      element: <><Navbar/><User/><Footer/></>
    },
  ])

  return (
    <>                                                                      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
