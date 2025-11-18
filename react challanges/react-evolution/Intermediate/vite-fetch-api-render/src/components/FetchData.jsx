import {  useEffect, useState } from "react";

const FetchData = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] =  useState(true);
    const [err,setErr] = useState(null);

    useEffect(() => {
    const usersFetch = async () => {
        try{
     const result = await fetch("https://jsonplaceholder.typicode.com/users");
     if (!result.ok) throw new Error("Some issue found"); //custom error
     const res = await result.json(); 
     console.log(res); //upar wait nh lagega to console pehle handle ho jayega aur tab 
     // tak promise handle nahi ho paega.
     setUsers(res);
        }
        catch(e)
        {
        //   console.log(e)
        setErr(e.message);
        }
        finally
        {
         setLoading(false);
        }
    }
    usersFetch();
    },[]);
    const containerStyle = {border:"2px solid black",padding: "0 10%"};
  
    if(loading) return <h2>The Page is in Progress</h2>
    if(err) return <h2>{err}</h2>
    return(
        <>
       <div style={containerStyle}>
         <h1>Users Data</h1>
        { users && 
            users.map((item)=> 
             <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.username}</li>
            <li>{item.email}</li>
            </ul>
            )
        }
       </div>
       
        </>
    );
}

export default FetchData;