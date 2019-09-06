import React from 'react';
import './App.css';
import StrikeButton from "./StrikeButton";
import BallButton from "./BallButton";
import FoulButton from "./FoulButton";
import HitButton from "./HitButton";


export default function Dashboard(props) {

    return(
        <div className="dashboard">
            <StrikeButton strikechange={props.strikechange} />
            <BallButton ballchange={props.ballchange}/>
            <FoulButton foulchange={props.foulchange}/>
            <HitButton hitchange={props.hitchange}/>
        </div>
    )
}