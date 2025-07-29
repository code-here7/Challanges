import React, { useState } from 'react'

export const WelcomeUser = () => {
    const [name,setName] = useState('');
      const [show,setShow] = useState('Guest');
    
      const handleSubmit = () => {
        setShow(name);
      }
    return (
      <>
      <form>
      <div>Welcome {show}!!</div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
      </>
    )
}

export default WelcomeUser;