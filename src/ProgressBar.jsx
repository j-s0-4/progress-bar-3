import React, {useState} from 'react'

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="container">
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{width: `${progress}%`, background: getColor(progress)}}></div>
        </div>
        <div className="progress-label">{progress}%</div>
        <button onClick={()=>handleButtonClick(progress,setProgress)}>Progress</button>
        <button onClick={()=>handleButtonReset(setProgress)}>Reset</button>
    </div>
  );
}
export default ProgressBar;

function handleButtonClick (progress, setProgress) {
    if(progress < 100){
        setProgress(progress + 20);
    }
};
function handleButtonReset (setProgress)  {
    setProgress(0);
};

const getColor = (progress) => {
    if(progress < 40) {
        return "#ff0000"
    } else if(progress < 70){
        return "#ffaa00"
    } else {
        return "#2ecc71";
    }
}

