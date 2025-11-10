import { useEffect, useState } from 'react'
import '../components/Countdown.css'

export default function App() {
    const [strtClck, setstrtClck] = useState(false);
    const [hours, setHours] = useState("");
    const [mins, setMins] = useState("");
    const [seconds, setSeconds] = useState("");
    
 

    const startTimer = (h,m,s) =>
    {
        const secInter = setInterval(() => {
         s = s -1 ;
         if(s<0 && m>0)
         {
            s = 59;
            m = m-1;
         }
         else if(s<0 || !setstrtClck)
         {
            clearInterval(secInter);
            alert("Timer is Over!!");
            setHours("");
            setMins("");
            setSeconds("");
            setstrtClck(false);
            return;
         }
         else if(m==0)
         {
            h = h-1;
            if(h<0)
            {
                h = 0;
            }
         }
         console.log(h+" "+m+" "+s);
        setHours(h);setMins(m);setSeconds(s);
        },1000)
    }

    const handleStart = () => {
        setstrtClck(true);
        let h = parseInt(hours),m = parseInt(mins),s = parseInt(seconds);
        if(isNaN(h) || isNaN(m) || isNaN(s))
        {
            alert("Please Enter a valid number!!");
            setHours("");
            setMins("");
            setSeconds("");
            setstrtClck(false);
            return;
        }
        startTimer(h,m,s);
        // console.log(h,m,s)
      
    }

    const handleReset = () => {
        setstrtClck(false);
        console.log("Handle Reset clicked!!");
        setHours("");
        setMins("");
        setSeconds("");
    }

    return (
        <>
        <div className='container'>
             <h1 className='heading'>Countdown Timer</h1>
            {
                !strtClck ?
                    <div className='strtEle'>
                        <input className="inputs" type="text" placeholder="HH" value={hours} onChange={(e) => setHours(e.target.value)}></input>
                        <input className="inputs" type="text" placeholder="MM" value={mins} onChange={(e) => setMins(e.target.value)}></input>
                        <input className="inputs" type="text" placeholder="SS" value={seconds} onChange={(e) => setSeconds(e.target.value)}></input>
                        <button type="button" onClick={handleStart}>Start</button>
                    </div>
                    :
                    <div>
                        <div className='playEle'>
                        <div>{ hours<10 ? `0${hours}` : hours}</div>
                        <div>:</div>
                        <div>{ mins<10 ? `0${mins}` : mins}</div>
                        <div>:</div>
                        <div>{ seconds<10 ? `0${seconds}` : seconds}</div>
                        </div>
                        <div className='playBut'>
                        <button type="button">Pause</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
            }
        </div>
        </>
    )
}

