//import React from 'react';
import React, { useState } from "react";
import './App.css';
import ChoiceCard from './components/ChoiceCard.js';
import { choices } from './utils';
import ChoiceButton from "./components/ChoiceButton";

// const choices = {
//   rock:{
//     name: "rock",
//     url: "https://images-na.ssl-images-amazon.com/images/I/61m9jG%2Bjj-L._AC_SX679_.jpg"
//   },
//   paper: {
//     name: "paper",
//     url: "https://m.media-amazon.com/images/I/61OorFhm6SL.jpg"
//   },
//   scissors: {
//     name: "scissors", 
//     url: "https://images-na.ssl-images-amazon.com/images/I/81TD%2B0Y9f6L._AC_SL1500_.jpg"
//   }
// };

const DEFAULT_IMG =
  "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

function App() {
  // // old syntax, doesn't update UI
  // let userC = {} // empty object
  // let computerC = {}
  let [userC,setUserC] = useState({}) // when we change the state, it will render. we use this instead of the equal sign
  let [computerC,setComputerC] = useState({}) // need to import -- add to line above "import React"
  let [username,setUsername] = useState(null)

  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");

  const [gameHistory, setGameHistory] = useState([]);


  const onplay = (userChoice) => {
    console.log("clicked",userChoice)

    // get user choice options from the choices object
    // userC = choices[userChoice]
    setUserC(choices[userChoice])
    // tell computer to choose an image to render => computer choosing logic here
    // computer chooses random item
    
    // create an array 
    let itemArray = Object.keys(choices) // this will get the key from the object and turn it into an array

    let randomNum = Math.floor(Math.random()*itemArray.length) // because itemArray is only 0, 1, 2 (0~2)

    let computerChoice = itemArray[randomNum]

    setComputerC(choices[computerChoice])
    console.log("computer choice",computerC)

    let result;

    if (userChoice === "rock") {
      result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice=== "paper") {
      result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice=== "scissors") {
      result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    }
  
    if (userChoice === computerChoice) result = "Tie game!";
    setGamePrompt(result)
    gameHistory.push(result);
    setGameHistory(gameHistory);

  }

  function playerResult(){
    if(prompt=="Victory!"){
      return "win"
    }else if(prompt=="Defeat!"){
      return "lose"
    }else if(prompt=="Tie game!"){
      return "tie"
    }else{
      return "notStarted"
    }
  }
  function CompResult(){
    if(prompt=="Victory!"){
      return "lose"
    }else if(prompt=="Defeat!"){
      return "win"
    }else if(prompt=="Tie game!"){
      return "tie"
    }else{
      return "notStarted"
    }
  }


  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title="You" choice={userC} winner={playerResult} imgURL={choices.rock.url} result={playerResult()} />
            <ChoiceButton onplay={onplay} />
            <h1 className="gamePrompt">{prompt}</h1>
            <ChoiceCard title="Computer" choice={computerC} winner={CompResult} imgURL={choices.paper.url} result={CompResult()} />
          </div>
          <div className="col-md-4 themed-grid-col">
            <div className="row nameField">
              <div className="col">
                <h3 className="enterName">Name: {username} </h3>
                <input id="type-name" placeholder="Type your name here"></input><button onClick={()=>setUsername(document.getElementById("type-name").value)}>Submit</button>
              </div>
            </div>
            <div className="row gameHistory">
              <div className="col">
                <h3>Game History</h3>
                <ul>
                  {gameHistory.map(result => {
                    return <li>{username}: {result}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// class & function components can be mixed 