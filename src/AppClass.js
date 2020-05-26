//making app as class component
import React, { Component } from 'react'
import './App.css';
import ChoiceCard from './components/ChoiceCard.js'

const choices = {
    rock:{
      name: "rock",
      url: "https://images-na.ssl-images-amazon.com/images/I/61m9jG%2Bjj-L._AC_SX679_.jpg"
    },
    paper: {
      name: "paper",
      url: "https://m.media-amazon.com/images/I/61OorFhm6SL.jpg"
    },
    scissors: {
      name: "scissors", 
      url: "https://images-na.ssl-images-amazon.com/images/I/81TD%2B0Y9f6L._AC_SL1500_.jpg"
    }
  };

export default class AppClass extends Component {

    constructor(props){ // constructor will initialize something (values when loading page, set something, etc)
        super(props) // "super" means parent, parent is Component // set props for parents as well (events stuff)

        this.state = {
            userC:{},
            computerC:{}
        }
    }
    
    onplay = (userChoice) => {
        let userC = choices[userChoice]

        // tell computer to choose an image to render => computer choosing logic here
        // computer chooses random item
        
        // create an array 
        let itemArray = Object.keys(choices) // this will get the key from the object and turn it into an array
    
        let randomNum = Math.floor(Math.random()*itemArray.length) // because itemArray is only 0, 1, 2 (0~2)
    
        let itemName = itemArray[randomNum]
    
        let computerC = choices[itemName]

        this.setState({userC:choices[userChoice],computerC:choices[itemName]}) // setState is a function
        console.log("computer choice",computerC)
    }

    render() {
        return (
            <div>
                <ChoiceCard title="You" choice={this.state.userC} winner={false} imgURL={choices.rock.url} />
                <ChoiceCard title="Computer" choice={this.state.computerC} winner={true} imgURL={choices.paper.url} />
                <button onClick={()=>onplay('rock')}>Rock</button>
                <button onClick={()=>onplay('paper')}>Paper</button>
                <button onClick={()=>onplay('scissors')}>Scissors</button>
            </div>
        )
    }
}
