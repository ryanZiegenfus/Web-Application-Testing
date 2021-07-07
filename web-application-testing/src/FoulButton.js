import React from 'react';
import './App.css';

export default function FoulButton(props) {

    return(
        <div onClick={() => props.foulchange()}>
            Foul
        </div>
    )
}