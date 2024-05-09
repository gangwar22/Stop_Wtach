import { useRef, useState, useEffect } from "react";

function Timer() {
    const [hh, setHH] = useState(0);
    const [mm, setMM] = useState(0);
    const [ss, setSS] = useState(0);
    const [timer, setTimer] = useState(false);

    const totalSeconds = useRef(null);
    const intervalId = useRef(null);

    useEffect(() => {
        if (hh === 0 && mm === 0 && ss === 0 && timer) {
            handleReset();
        }
    }, [hh,mm,ss]);

    const handleStart = () => {
        if (hh === 0 && mm === 0 && ss === 0) return;
        
        totalSeconds.current = hh * 3600 + mm * 60 + ss;
        setTimer(true);

        intervalId.current = setInterval(() => {
            totalSeconds.current -= 1;
            setHH(Math.floor(totalSeconds.current / 3600));
            setMM(Math.floor((totalSeconds.current % 3600) / 60));
            setSS(totalSeconds.current % 60);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(intervalId.current);
        setTimer(false);
    };

    const handleReset = () => {
        clearInterval(intervalId.current);
        setTimer(false); 
        setHH(0);

        setMM(0);
        setSS(0);
    };

    return (
        <div className="main_container">
            <div className="container">
                <h1>Timer</h1>
                <div className="input">
                <input className="box" type="number" placeholder="HH" value={hh} disabled={timer} onChange={(e) => setHH(parseInt(e.target.value, 10))} />
                <input className="box" type="number" placeholder="MM" value={mm} disabled={timer} onChange={(e) => setMM(parseInt(e.target.value, 10))} />
                <input className="box" type="number" placeholder="SS" value={ss} disabled={timer} onChange={(e) => setSS(parseInt(e.target.value, 10))} />
                </div>
            </div>
            <div className="button">
                <button className="button_1" onClick={handleStart}>Start</button>
                <button className="button_1" onClick={handleStop}>Stop</button>
                <button className="button_1" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Timer;
