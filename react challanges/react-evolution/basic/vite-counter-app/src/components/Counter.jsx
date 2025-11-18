import React, {useState } from 'react'
import './Counter.css'

export default function Counter () {
    const [count,setCount]  = useState(0);
   
    const handleCount = (e) => {
     const name = e.target.name ;
    //  console.log(name);
    if (name == 'Inc')
    {
        setCount(c => c+1);
    }
    else if(name == 'Dec')
    {
        count!== 0 ? setCount(c => c-1) : setCount(0) ;
    }
    else
    {
        setCount(0);
    }
    }

  return (
    <>
    <div className='container'>
    <div className='counterDiv'>Count : {count}</div>
    <div>
    <button name='Inc' onClick={handleCount} className='incButton'>Increament</button>
    <button name='Dec' onClick={handleCount} className='decButton'>Decrement</button>
    </div>
    <div>
         <button name='Reset' onClick={handleCount} className='resButton'>Reset</button>
    </div>
    </div>
    </>
  )
};
