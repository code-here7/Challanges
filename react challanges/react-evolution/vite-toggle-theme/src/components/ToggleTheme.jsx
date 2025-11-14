import React, { useEffect, useState } from 'react'

export default function ToggleTheme() {
    const [theme,setTheme] = useState("light");
    // useEffect(() => {
    //     console.log(theme);
    // },[theme]);

    const handleTheme = () => {
        
        theme==="light" ? setTheme("dark") : setTheme("light");
        
    }
    const themeStyleDark  = 
    {backgroundColor : "black", color: "white", minHeight: "100vh",width: "100%" }
    const themeStyleLight  = 
    {backgroundColor : "grey", color: "black" , minHeight: "100vh",width: "100%"  };
  return (
    <>
    <div style={theme==="light" ? themeStyleLight : themeStyleDark}>
     <div style={{    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column"}}>
       <h1>Toggle Theme</h1>
       <button onClick={handleTheme}>{theme === "light" ? "Dark": "Light" }</button>
     </div>
   </div>
    </>
  )
}
