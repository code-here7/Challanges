import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import WelcomeUser from './components/WelcomeUser'
import  Faq  from './components/Faq'
import CountDownTimer from './components/CountDownTimer'
import Countdown from './components/Countdown'

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Countdown />}> </Route> 
      <Route path="/countdown" element={<CountDownTimer />}> </Route> 
      <Route path="/faq" element={<Faq />}> </Route>    
     <Route path="/welcomeuser" element={<WelcomeUser />}> </Route>
   </Routes>
   </>
  )
}

export default App
