import React from 'react'
import './Card.css'

export default props =>
    <div className="Card" style={{borderColor: props.color}}>
        <div className="Header" style={{backgroundColor: props.color}}>
            {props.titulo}
        </div>
        <div className="Content">
            {props.children}
        </div>
    </div>