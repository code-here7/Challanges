import React, { useState } from 'react'
//two way binding : because state mein data jaa rha, state se aa rha, if sirf jata to one way hoti.
//point to be noted: inline messy, so using internal css.
export default function LiveText ()  {
    const [name,setName] = useState("");
    const container ={backgroundColor : "#009688",minHeight : "100vh",width:"100%"};
    const subContainer = {
    margin: "auto",
    padding: "10%",
    width: "50%",
    display: "grid",
    justifyItems: "center",
    gap: "20px", //note...,ake structure even.
    fontSize: "larger",
    fontFamily: "monospace",
     }
     const outputStyle = {padding: "2%",fontSize: "60px",fontStyle: "italic",fontWeight: "bolder"}
  return (
    <>
    <div style={container}>
     <div style={subContainer}>
      <h1>Live Text</h1>
      <span>Enter Your Name:</span>
      <input type='text' value={name} 
      onChange={(e)=>setName(e.target.value)} 
      placeholder='Enter your Name'
      style={{fontSize:"20px",border:"8px solid #a7ded4",borderRadius:"5px"}}/>
       <div style={outputStyle}>
        Say Out Loud :{name}
     </div>
     </div>
    </div>
    </>
  )
}
