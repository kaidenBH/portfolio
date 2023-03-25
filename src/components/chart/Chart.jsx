import React from 'react'
import './chart.css'
const Chart = () => {
  return (
    <div class="skills">
        <div class="progressBar">
            <h4>HTML5, CSS3</h4>
            <div class="progressBarContainer">
                <div class="progressBarValue value-100"></div>
            </div>
        </div>
        <div class="progressBar">
            <h4>Python, Java</h4>
            <div class="progressBarContainer">
                <div class="progressBarValue value-90"></div>
            </div>
        </div>
        <div class="progressBar">
            <h4>Javascript, React</h4>
            <div class="progressBarContainer">
                <div class="progressBarValue value-70"></div>
            </div>
        </div>
        <div class="progressBar">
            <h4>C#</h4>
            <div class="progressBarContainer">
                <div class="progressBarValue value-80"></div>
            </div>
        </div>
    </div>
  )
}

export default Chart