import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import { Header } from './Pages/header/header'
import { Home } from './Pages/Home/home'
import { Footer } from './Pages/Footer/footer'

function App() {


  return (
    <>
     <Header/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
