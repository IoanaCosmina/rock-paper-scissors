import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import Lizard from './icons/Lizard';
import Spock from './icons/Spock';

export const choices = [
    { id: 1, name: 'rock', component: Rock, losesTo: [2, 5] },
    { id: 2, name: 'paper', component: Paper, losesTo: [3, 4] },
    { id: 3, name: 'scissors', component: Scissors, losesTo: [1, 5] },
    { id: 4, name: 'lizard', component: Lizard, losesTo: [1, 3] },
    { id: 5, name: 'spock', component: Spock, losesTo: [4, 2] }
];
