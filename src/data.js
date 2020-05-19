import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

export const choices = [
    { id: 1, name: 'rock', component: Rock, losesTo: 2 },
    { id: 2, name: 'paper', component: Paper, losesTo: 3 },
    { id: 3, name: 'scissors', component: Scissors, losesTo: 1 }
];
