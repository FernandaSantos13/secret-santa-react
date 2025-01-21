import React, { useState, useEffect } from 'react';

interface ParticipantsListProps {
    onParticipantsChange: (participants: string[]) => void;
}

const ParticipantsList: React.FC<ParticipantsListProps> = ({ onParticipantsChange }) => {
    const [participants, setParticipants] = useState<string[]>([]);
    const [newParticipant, setNewParticipant] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewParticipant(e.target.value);
    };

    const addParticipant = () => {
        if (newParticipant.trim() !== '') {
            const updatedParticipants = [...participants, newParticipant.trim()];
            setParticipants(updatedParticipants);
            setNewParticipant('');
        }
    };

    useEffect(() => {
        onParticipantsChange(participants);
    }, [participants, onParticipantsChange]);

    return (
        <div>
            <h1>Secret Santa - Participants List</h1>
            <h2>Please enter the name of each participant and then click 'ADD NAME'. When finished, click 'DRAW SECRET SANTA'.</h2>
            <input 
                type="text" 
                value={newParticipant} 
                onChange={handleInputChange} 
                placeholder="Add name here"
            />
            <button onClick={addParticipant}>ADD NAME</button>
            <ul>
                {participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
        </div>
    );
};

export default ParticipantsList;





/*** import React, { useState } from 'react';

const ParticipantsList = () => {
    const [participants, setParticipants] = useState<string[]>([]);
    const [newParticipant, setNewParticipant] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewParticipant(e.target.value);
    };

    const addParticipant = (participants: string[]) => {
        if (newParticipant.trim !== '') {
            setParticipants([...participants, newParticipant.trim]);
            setNewParticipant('');
        }
    };

    return (
        <div>
            <h1>Secret Santa - Participants List</h1>
            <h2>Please enter the name of each participant and then click 'ADD NAME'</h2>
            <input 
                type="text" 
                value={newParticipant} 
                onChange={handleInputChange} 
                placeholder="Add name here"
            />
            <button onClick={addParticipant}>ADD NAME</button>
        </div>
    );
    return;
};

export default ParticipantsList;***/
