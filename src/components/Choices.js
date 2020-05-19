import React from 'react';
import Rock from '../icons/Rock';
import Paper from '../icons/Paper';
import Scissors from '../icons/Scissors';

const Choices = (props) => {
    const { handleUserChoice } = props;

    return (
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
    );
}

export default Choices;