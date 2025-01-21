import './App.css';
import React, { useState } from 'react';
//import shuffle from './shuffle';
import ParticipantsList from './ParticipantsList';
import shuffle from './shuffle';

const Draw = () => {
    const [participants, setParticipants] = useState<string[]>([]);

    const handleParticipantsChange = (updatedParticipants: string[]) => {
        setParticipants(updatedParticipants);
    };

    const handleDrawClick = () => {
        console.log('Final participants list:', participants);
        const shuffled = shuffle(participants);
        const result = shuffled.map((value, index) => {
            return{
                giver: value,
                receiver: shuffled[index + 1] || shuffled[0]
            }
        });
        console.log(result);
    };

    return (
        <div>
            <ParticipantsList onParticipantsChange={handleParticipantsChange} />
            <button onClick={handleDrawClick}>DRAW SECRET SANTA</button>
        </div>
    );
};

export default Draw;


