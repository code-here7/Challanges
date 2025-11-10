import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
 const navigate = useNavigate();
  return (
  <>
    <div>Sidebar</div>
    <div>
      <nav>
       <button onClick={()=> navigate('/users')}>Users</button>
       <button  onClick={()=> navigate('/reports')}>Reports</button>
       <button  onClick={()=> navigate('/settings')}>Settings</button>
      </nav>
    </div>
  </>
  )
}

export default Sidebar;