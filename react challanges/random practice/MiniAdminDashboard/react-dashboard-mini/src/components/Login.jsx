import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData,setFormdata] = useState([{
        'name':'',
        'role':''
    }]);
    const navigate = useNavigate();
     
    useEffect(()=>{
        console.log(formData);
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormdata(data.map((prev) => ({...prev,[name]:value})));
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const oldData = localStorage.getItem('userdata') || [];
        const newData = [...oldData,formData];
        // console.log(newData);
        // localStorage.setItem('userdata',newData);
        // navigate("/home");
    }
return(
    <>
    <form>
        <label>Name</label><br></br>
        <input type="text" name="name" value={formData.uname} onChange={handleChange}/><br></br>

        <label>Role</label><br></br>
        <select name='role' value={formData.role} onChange={handleChange}>
        <option></option>
         <option value='admin'>Admin</option>
         <option  value='manager'>Manager</option>
         <option  value='viewer'>Viewer</option>
        </select>
      
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
    </>
)
}

export default Login;