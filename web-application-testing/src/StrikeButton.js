import React from 'react';
import './App.css';

export default function StrikeButton(props) {

    return(
        <div onClick={() => props.strikechange()}>
            Strike
        </div>
    )
}