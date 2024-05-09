import { useRef, useState } from "react"
import "../App.css"

function StopWatch() {
    const Start_Time = useRef(0)
    const [ElapsedTime, setElapsedTime] = useState(0)
    const inteveral = useRef(null)

    const handelClick_Start = () => {
        Start_Time.current = Date.now()
        inteveral.current = setInterval(() => {
            setElapsedTime(Date.now() - Start_Time.current)
        }, 100)

    }

    const HandelClick_Stop = () => {
        clearInterval(inteveral.current)
    }

    const handelClick_Rest = () => {
        clearInterval(inteveral.current)
        setElapsedTime(0)
    }


    const Format_time = () => {
        const Minutes = Math.floor(ElapsedTime / (1000 * 60) % 60)
        const Seconds = Math.floor(ElapsedTime / (1000) % 60)
        const MiliSeconds = Math.floor(ElapsedTime % 1000 / 10);

        return `${Minutes.toString().padStart(2, '0')}:${Seconds.toString().padStart(2, "0")}:${MiliSeconds.toString().padStart(2, "0")}`
    }

    return (
        
        <div className="container_T" >
            <h1 className="heading">StopWatch</h1>
            <div className="main">
                <h1>{Format_time()}</h1>
            </div>
            <div className="main_1">
                <button className="btn-1" onClick={handelClick_Start}>Start</button>
                <button className="btn-1" onClick={HandelClick_Stop}>Stop</button>
                <button className="btn-1" onClick={handelClick_Rest}>Reset</button>
            </div>
        </div>
      
    )
}

export default StopWatch