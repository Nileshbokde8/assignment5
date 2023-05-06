import { useState } from 'react';
import './App.css';

function App() {
  const [TeamA, setTeamA]=useState(0);
  const [TeamB, setTeamB]=useState(0);
  
  return (<>
  <h1 className='heading'>WELCOME TO FOOTBALL TOURNAMENT!!!!!⚽⚽ </h1>
  <div className='container'>
    <h1 className='score'>!!  SCORE BOARD 💯  !!</h1>
    <div className='score-container'>
    <div>
     <h1>TEAM A 🧔🏽‍♂️</h1>
     <h2 className='counter'>{TeamA}</h2>
     <button  onClick={()=>{
      setTeamA(TeamA+1)
     }}>+</button>&nbsp;&nbsp;&nbsp;

     <button  onClick={()=>{
      if(TeamA===0){
        alert("Score cant be nagative")
      }
      else{
        setTeamA(TeamA-1)
      }
     }}>-</button>
    </div>

    <div>
    <h1>TEAM B 👨🏻‍🦱</h1>
    <h2 className='counter'>{TeamB}</h2>
    <button onClick={()=>{
      setTeamB(TeamB+1)
    }} >+</button>&nbsp;&nbsp;&nbsp;
    <button onClick={()=>{
      if(TeamB===0){
        alert("Score cant be nagative")
      }
      else{
        setTeamB(TeamB-1)
      }
    }} >-</button>
    </div>
    </div>
  </div>
  
  </>

  )}


export default App;
