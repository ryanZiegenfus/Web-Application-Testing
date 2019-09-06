import React from 'react';
import './App.css';

export default function BallButton(props) {

    return(
        <div onClick={() => props.ballchange()}>
            Ball
        </div>
    )
}