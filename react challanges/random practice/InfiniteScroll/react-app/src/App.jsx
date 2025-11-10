import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Products from './components/Products'

function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element={<Products />}></Route>
   </Routes>
   </>
  )
}

export default App
