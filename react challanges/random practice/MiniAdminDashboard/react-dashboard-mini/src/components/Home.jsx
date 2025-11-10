import React from 'react'
import Dashboard from './HomeComponents/Dashboard'
import Sidebar from './HomeComponents/Sidebar'

export const Home = () => {
  return (
    <div>
        <div><Dashboard/></div>
        <div><Sidebar /></div>
    </div>
  )
}

export default Home;