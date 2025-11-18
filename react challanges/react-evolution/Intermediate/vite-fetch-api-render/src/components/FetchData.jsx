import {  useEffect, useState } from "react";

const FetchData = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
    const usersFetch = async () => {
     const result = await fetch("https://jsonplaceholder.typicode.com/users");
     const res = await result.json(); 
     console.log(res); //upar wait nh lagega to console pehle handle ho jayega aur tab 
     // tak promise handle nahi ho paega.
     setUsers(res);
    }
    usersFetch();
    },[]);
    const containerStyle = {border:"2px solid black",padding: "0 10%"};

    return(
        <>
       <div style={containerStyle}>
         <h1>Users Data</h1>
        {
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