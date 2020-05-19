import React from 'react';
import Rock from '../icons/Rock';
import Paper from '../icons/Paper';
import Scissors from '../icons/Scissors';
import Lizard from '../icons/Lizard';
import Spock from '../icons/Spock';

const Choices = (props) => {
    const { handleUserChoice } = props;

    return (
        <div className="choices">
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
                <button className="lizard" onClick={() => handleUserChoice(4)}>
                    <Lizard />
                </button>
                <button className="spock" onClick={() => handleUserChoice(5)}>
                    <Spock />
                </button>
            </div>
            <div>You</div>
            <div className="vs">vs</div>
            <div>Computer</div>
            <div>
                <button className="computer-choice">?</button>
            </div>
        </div>
    );
}

export default Choices;