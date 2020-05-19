import React from 'react';

const GameState = (props) => {
    const { gameState, userChoice, computerChoice, renderComponent, restartGame } = props;

    return (
        <div className={`game-state ${gameState}`}>
            <div>
                <div className="game-state-content">
                    <p>{renderComponent(userChoice)}</p>
                    <p>You {gameState}!</p>
                    <p>{renderComponent(computerChoice)}</p>
                </div>
                <button onClick={() => restartGame()}>Play Again</button>
            </div>
        </div>
    );
}

export default GameState;