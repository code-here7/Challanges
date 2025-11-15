import { useEffect, useState } from 'react';

export default function Countdown (props) {
    const countVal = props.count
    const [count, setCount] = useState(countVal);
    const [isPlay, setIsPlay] = useState(false);
    
    useEffect(()=> {
    // console.log(isPlay);
    // console.log(count);

    if(!isPlay) return;
    const timer = setTimeout(()=> setCount(prev => prev -1),1000);
    if(count===0)
    {
        clearTimeout(timer);
        setIsPlay(false);
    }
    return ()=> clearTimeout(timer);
    
    },[isPlay,count]);
    
    const handlePlay = () => {
        setIsPlay(true);
    }

  return (
   <>
   <h1>Count Down Begins: {count}</h1>
   <button value={count} onClick={handlePlay}>Play</button>
   </>
  )
}
