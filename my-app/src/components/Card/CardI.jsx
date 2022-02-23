import './Card.css'

import React from 'react'

export default props =>
    <div className="CardI" style={{borderColor: props.color}}>
        <div className="Header" style={{backgroundColor: props.color}}>
            {props.titulo}
        </div>
        <div className="Content">
            {props.children}
        </div>
    </div>