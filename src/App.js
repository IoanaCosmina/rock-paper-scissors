import React, { useState, useEffect } from 'react';
import './App.css';

const choices = [
  { id: 1, name: 'rock' },
  { id: 2, name: 'paper' },
  { id: 3, name: 'scissors' }
];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  useEffect(() => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }, []);

  function handleUserChoice(choice) {
    const currentChoice = choices.find(c => c.id === choice);
    console.log(currentChoice);
    setUserChoice(currentChoice);
  };

  return (
    <div className="app">
      <div className="info">
        <h2>Rock. Paper. Scissors.</h2>

        <div className="wins-losses">
          <div className="wins">
            <span className="number">0</span>
            <span className="text">Wins</span>
          </div>

          <div className="losses">
            <span className="number">0</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      <div className="choices">
        <div>You</div>
        <div />
        <div>Computer</div>

        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}></button>
          <button className="paper" onClick={() => handleUserChoice(2)}></button>
          <button className="scissors" onClick={() => handleUserChoice(3)}></button>
        </div>

        <div className="vs">vs</div>

        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}

export default App;