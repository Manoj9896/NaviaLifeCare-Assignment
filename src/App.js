import React,{useState,useRef} from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './App.css'

function App() {
  const [percentage, setpercentage] = useState(0);
  
  let interval=useRef(null)

  function Start(){
    setpercentage(0);
    interval.current=setInterval(()=>setpercentage(prev=>prev+1),100);
  }

  function Pause(){
    clearInterval(interval.current);
  }

  return (
      <div className="App">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
                  rotation: 0.5,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(250, 0, 0, ${percentage / 100})`,
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                  })}
        />
      <div style={{marginTop:'50px'}}>
        <button onClick={Start}>Start</button>
        <button onClick={Pause}>Pause</button>
      </div>
    
      </div>
  )
}

export default App


