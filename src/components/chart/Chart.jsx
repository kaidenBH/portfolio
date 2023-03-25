import React from 'react'
import './chart.css'
const Chart = () => {
  return (
    <div className="skills">
        <div className="progressBar">
            <h4>HTML5, CSS3</h4>
            <div className="progressBarContainer">
                <div className="progressBarValue value-100"></div>
            </div>
        </div>
        <div className="progressBar">
            <h4>Python, Java</h4>
            <div className="progressBarContainer">
                <div className="progressBarValue value-90"></div>
            </div>
        </div>
        <div className="progressBar">
            <h4>Javascript, React</h4>
            <div className="progressBarContainer">
                <div className="progressBarValue value-70"></div>
            </div>
        </div>
        <div className="progressBar">
            <h4>C#</h4>
            <div className="progressBarContainer">
                <div className="progressBarValue value-80"></div>
            </div>
        </div>
    </div>
  )
}

export default Chart