import React from 'react';
import './App.css';

export default function HitButton(props) {

    return(
        <div onClick={() => props.hitchange()}>
            Hit
        </div>
    )
}