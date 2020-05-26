import React from 'react'

export default function ChoiceButton(props) {
    return (
        <div className="container">
            <button className="btn btn-success btn-lg" onClick={()=>props.onplay('rock')}>Rock</button> 
            <button className="btn btn-success btn-lg" onClick={()=>props.onplay('paper')}>Paper</button>
            <button className="btn btn-success btn-lg" onClick={()=>props.onplay('scissors')}>Scissors</button>
        </div>
    )
}
