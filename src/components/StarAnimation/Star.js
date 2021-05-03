import React from 'react';
import './Star.scss'

function Star(props) {
    return (
        <div style={{animationDelay: props.delay, position: "absolute", top: props.top, left: props.left, transform: "rotate(45deg)"}} className="star">
            
        </div>
    )
}

export default Star
