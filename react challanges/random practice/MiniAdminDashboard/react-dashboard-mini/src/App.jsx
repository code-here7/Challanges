import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import  Home  from './components/Home'
import Dashboard from './components/HomeComponents/Dashboard'
import Sidebar from './components/HomeComponents/Sidebar'
import Users from './components/Users'
import Reports from './components/Reports'
import Settings from './components/Settings'
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
     <Route path='/sidebar' element={<Sidebar />}></Route>
     <Route path='/users' element={<Users />}></Route>
     <Route path='/reports' element={<Reports />}></Route>
     <Route path='/settings' element={<Settings />}></Route>
   </Routes>
   </>
  )
}

export default App
