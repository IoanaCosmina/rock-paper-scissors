import React, { useState, useEffect } from 'react';
import './App.css';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

const choices = [
  { id: 1, name: 'rock', component: Rock, losesTo: 2 },
  { id: 2, name: 'paper', component: Paper, losesTo: 3 },
  { id: 3, name: 'scissors', component: Scissors, losesTo: 1 }
];

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null); // win, lose, draw

  useEffect(() => {
    restartGame();
  }, []);

  function restartGame() {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function handleUserChoice(choice) {
    const currentChoice = choices.find(c => c.id === choice);
    setUserChoice(currentChoice);

    if (currentChoice.losesTo === computerChoice.id) {
      setLosses(losses => losses + 1);
      setGameState('lose');
    } else if (computerChoice.losesTo === currentChoice.id) {
      setWins(wins => wins + 1);
      setGameState('win');
    } else if (computerChoice.id === currentChoice.id) {
      setGameState('draw');
    }
  };

  function renderComponent(choice) {
    const Component = choice.component;
    return <Component />
  }

  return (
    <div className="app">
      <div className="info">
        <h2>Rock. Paper. Scissors.</h2>

        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{wins === 1 ? 'Win' : 'Wins'}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">{losses === 1 ? 'Loss' : 'Losses'}</span>
          </div>
        </div>
      </div>

      {
        gameState &&
        <div onClick={() => restartGame()} className={`game-state ${gameState}`}>
          <div className="game-state-content">
            <p>{renderComponent(userChoice)}</p>
            <p>You {gameState}!</p>
            <p>{renderComponent(computerChoice)}</p>
          </div>

          <button onClick={() => restartGame()}>Play Again</button>
        </div>
      }

      <div className="choices">
        <div>You</div>
        <div />
        <div>Computer</div>

        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
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