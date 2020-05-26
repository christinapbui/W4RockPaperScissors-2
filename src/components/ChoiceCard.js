import React from 'react'

export default function ChoiceCard(props) {
    const DEFAULT_IMG =
    "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";  

    


    return ( // can draw UI with HTML. have to wrap all source code in one <div> tag
        <div className={`choice-card  ${props.result}`}> 
            <h1>{props.title}</h1>
            <img src={props.choice.url || DEFAULT_IMG} alt={props.title}/>
            <h3>{props.result}</h3>
        </div>
    )
}