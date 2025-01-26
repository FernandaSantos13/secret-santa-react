import {useState} from 'react';

interface ParticipantProps {
    onClick: (newParticpant:string) => void;
}

export const Participant = ({onClick}:ParticipantProps) => {
    const [newParticipant, setNewParticipant] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewParticipant(e.target.value);
    }

    const handleAddParticipant = () => {
        if (newParticipant.trim() !== '') {
            onClick(newParticipant.trim());
            setNewParticipant('');
        };
    };

    return (
        <>
        <input
            type="text"
            value={newParticipant}
            onChange={handleInputChange}
            placeholder="Add name here"
        />
        <button onClick={handleAddParticipant}>ADD NAME</button>
        </>
    );
};





