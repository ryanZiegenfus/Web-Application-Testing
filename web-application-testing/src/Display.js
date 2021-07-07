import React, {useState} from 'react';
import './App.css';

export default function Display(props) {

    return(
        <div className="display">
            <div className="display-items">
                <div>{props.balls}</div>
                <div>balls</div>
            </div>
            <div className="play-ball">Play Ball!</div>
            <div className="display-items">
                <div>{props.strikes}</div>
                <div>strikes</div>
            </div>
        </div>
    )
}