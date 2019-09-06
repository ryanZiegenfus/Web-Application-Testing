import React, {useState} from 'react';
import './App.css';
import Display from "./Display";
import Dashboard from "./Dashboard";

export const addPoint = currentPoint => {
  return currentPoint + 1
}

function App() {
  const [ballsState, setBallsState] =useState(0)
  const [strikesState, setStrikesState] = useState(0)

  const ballChange = () => {
    if (ballsState === 3){
      setBallsState(0);
      setStrikesState(0);
    }
    else{
      setBallsState(addPoint(ballsState))
    }
  }

  const strikeChange = () => {
    if (strikesState === 2){
      setBallsState(0);
      setStrikesState(0);
    }
    else{
      setStrikesState(addPoint(strikesState))
    }
  }

  const foulChange = () => {
    if (strikesState < 2){
      setStrikesState(addPoint(strikesState))
    }
}

const hitChange = () => {
  setBallsState(0)
  setStrikesState(0)
}

  return (
    <div className="App">
      <Display balls={ballsState} strikes={strikesState}/>
      <Dashboard ballchange={ballChange} strikechange={strikeChange} foulchange={foulChange} hitchange={hitChange}/>
    </div>
  );
}

export default App;
