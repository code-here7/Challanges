import React, { useState, useRef } from 'react'
import '../components/CountDownTimer.css'


export const CountDownTimer = () => {
    const [sec, setSec] = useState('');
    const [min, setMin] = useState('');
    const [hour, setHour] = useState('');
    const [sclick, setSclick] = useState(false);
    const [pclick, setPclick] = useState(false);
    let intervalSec = useRef(null);
    let intervalMin = useRef(null);
    let intervalHour = useRef(null);
    let s = useRef(0);
    let m = useRef(0);
    let h = useRef(0);

    const handlePause = () => {
        setPclick(!pclick);
        // console.log(pclick);
        if(!pclick)
        {
        clearInterval(intervalSec.current);
        clearInterval(intervalMin.current);
        clearInterval(intervalHour.current);
        }
        else
        {
            handleSec();
            handleMin();
            handleHour();
        }
    }

    const handleReset = () => {
        // console.log("reset");
        setSclick(false);
        clearInterval(intervalSec.current);
        clearInterval(intervalMin.current);
        clearInterval(intervalHour.current);
        setSec(0);
        s.current = 0;
        setMin(0);
        m.current = 0;
        setHour(0);
        h.current = 0;
    }

    const handleSec = () => {
        intervalSec.current = setInterval(() => {
            s.current += 1;
            // console.log(s.current);
            setSec(s.current);
            if (s.current == 60) {
                clearInterval(intervalSec.current);
                return;
            }
        }, 1000);
    }

    const handleMin = () => {
        intervalMin.current = setInterval(() => {
            handleSec();
            m.current += 1;
            // console.log(m.current);
            setMin(m.current);
            if (m.current == 60) {
                clearInterval(intervalMin.current);
                return;
            }
        }, 60000)
    }

    const handleHour = () => {
        intervalHour.current = setInterval(() => {
            handleMin();
            h.current += 1;
            // console.log(h.current);
            setHour(h.current);
            if (h.current == 60) {
                clearInterval(intervalHour.current);
                return;
            }
        }, 3600000)
    }


    const handleSubmit = () => {
        setSclick(true);
        setSec(0);
        setMin(0);
        setHour(0);
        handleSec();
        handleMin();
        handleHour();
    }

    return (
        <div>
            <h4>Countdown timer</h4>
            <div className='timer'>
                <span className='time'>{!sclick ? 'HH' : hour}</span>
                <span>:</span>
                <span className='time'>{!sclick ? 'MM' : min}</span>
                <span>:</span>
                <span className='time'>{!sclick ? 'SS' : sec}</span>
                <span>
                    {!sclick
                        ?
                        <button type="button" className='strBtn' onClick={handleSubmit}>Start</button>
                        :
                        <div>
                            <span>
                             {!pclick 
                             ? 
                             <button type="button" className='strBtn' onClick={handlePause}>Pause</button>
                             :
                             <button type="button" className='strBtn' onClick={handlePause}>Play</button>
                             }
                            </span>
                            <button type="button" className='strBtn' onClick={handleReset}>Reset</button>
                        </div>
                    }
                </span>
            </div>
        </div>
    )
}

export default CountDownTimer;