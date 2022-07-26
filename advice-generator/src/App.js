import iconDice from "./images/icon-dice.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg"
import dividerDesktop from "./images/pattern-divider-desktop.svg"
// import "./styles.css"
import axios from "axios";
import React, { useState } from 'react';
import "./styles/app.scss"



function App() {
  const [inputData, setInputData] = useState("Click the dice");
 
  
  const diceHandler = () => {
  axios.get("https://api.adviceslip.com/advice").then(response => {
    setInputData(response.data.slip.advice)
   })
 }

 console.log(inputData);
  return (
    <div classNameName="App">
     <div className="container">
        <div className="box">
          <h1 className="header">Advice #</h1>
          <h2 className="random-advice">"{inputData}"</h2>
          <picture>
            <source
              media="(min-width: 600px)"
              srcset={dividerDesktop}
            /> 
            <img
              className="divider"
              srcset={dividerMobile}
              alt=""
            />
          </picture>
          <div className="dice-box">
            <img onClick={diceHandler} src= {iconDice} alt="dice" className="dice" />
          </div>
        </div>

        <div className="attribution">
          Challenge by
          <a
            className="att-a"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            >Frontend Mentor</a
          >. Coded by
          <a
            className="att-a"
            href="https://github.com/LeaHaelin/Frontend-Mentor-Challenges"
            > Lea Haelin Kim</a
          >.
        </div>
      </div>
    </div>
  );
}


export default App;