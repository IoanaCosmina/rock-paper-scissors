import React, { useState, useEffect } from 'react';
import './App.css';
import Choices from './components/Choices';
import GameState from './components/GameState';
import WinsLosses from './components/WinsLosses';
import { choices } from './data';

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
        <WinsLosses wins={wins} losses={losses} />
      </div>

      {
        gameState && <GameState
          gameState={gameState}
          userChoice={userChoice}
          computerChoice={computerChoice}
          renderComponent={renderComponent}
          restartGame={restartGame}
        />
      }

      <Choices handleUserChoice={handleUserChoice} />
    </div>
  );
}

export default App;