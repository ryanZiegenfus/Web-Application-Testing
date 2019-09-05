import React, {useState} from 'react';
import './App.css';
import Display from "./Display";
import Dashboard from "./Dashboard";

function App() {
  const [ballsState, setBallsState] =useState(0)
  const [strikesState, setStrikesState] = useState(0)

  const ballChange = () => {
      setBallsState(ballsState + 1)
  }

  const strikeChange = () => {
      setStrikesState(strikesState + 1)
  }

  return (
    <div className="App">
      <Display balls={ballsState} strikes={strikesState}/>
      <Dashboard ballschange={ballChange} strikechange={strikeChange}/>
    </div>
  );
}

export default App;
