import React from 'react'

export default function Dinner(props) {
    return (
        <div>
            <h1>we are having {props.dishName} in dinner </h1>
            <h2>in sweet dish we have {props.sweetDish}</h2>
        </div>
    )
}
