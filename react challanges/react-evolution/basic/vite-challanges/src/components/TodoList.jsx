import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    const [task, setTask] = useState({
        taskName: ""
    });

    const [alltask, setAllTask] = useState([]);
    const [editClick, setEditClick] = useState(false);
   
     useEffect(() => {
         const data = JSON.parse(localStorage.getItem("task"));
         if(data)
         {
          setAllTask(data);
         }
    }, []);

    // useEffect(() => {
    //     console.log(task);
    // }, [task]);

    useEffect(() => {
        console.log(alltask);
        if(alltask.length>0)
        {
         localStorage.setItem("task",JSON.stringify(alltask));
        }
        else
        {
            localStorage.removeItem("task");
        }
  }, [alltask]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTask(prev => ({ ...prev,[name]: value }));
        
    }

    const handleAdd = () => {
        setAllTask(prev => [...prev,{id: uuidv4() ,...task } ]);
        setTask({
        taskName: ""
    });
    }

    const handleDelete = (e) =>
    {
        // console.log(e.target.value);
        const id = e.target.value;
        const dltArray = alltask.filter((item) => item.id != id);
        setAllTask(dltArray);
    }
    const handleEdit = (e) => {
    setEditClick(true);
    const id  = e.target.value;
    const edited = alltask.map((item) => item.id==id ? {...item,isEdit:true} : item);
    setAllTask(edited);
    }
    const handleUpdate = (taskId,e) => {
        setEditClick(false);
        const id = taskId;
        const taskName = e.target.value;
        const updated = alltask.map((item) => item.id==id ? {...item,taskName:taskName,isEdit:false} : item)
        setAllTask(updated)
        setTask({
        id: task.id,
        taskName: "",
        isEdit : false
    });
    }
    return (
        <>
            <input type='text' name='taskName' value={editClick ? "" :task.taskName } onChange={handleChange} disabled={editClick} />
            <button onClick={handleAdd}>Add Task</button><br /><br />
            <table>
                <thead><tr>
                    <th>Task List</th>
                    <th>Task Action</th>
                </tr></thead>
                <tbody>
                    {alltask.map((item) =>
                        <tr key={item.id}>
                            {item.isEdit
                             ? <td><input type='text' name='taskName' value={task.taskName} onChange={handleChange} /></td> 
                             : <td>{item.taskName}</td> }
                            <td>
                                 {item.isEdit 
                                 ? <button onClick={(e) => handleUpdate(item.id,e)} value={task.taskName}>Update</button> 
                                 : <button onClick={handleEdit} value={item.id}>Edit</button> }
                                 <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
