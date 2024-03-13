import React from 'react'
import { useNavigate } from 'react-router-dom';
function AppBar() {
    const Navigate=useNavigate();
  return (
    <div>
    <div>
      <button onClick={()=>{
        Navigate("/");
      }}>MainPage</button>
      <button onClick={()=>{
        Navigate("/dashboard")
      }}>DashBoard</button>
    </div>
    </div>
  )
}

export default AppBar