import './App.css';
import { useState, useEffect } from 'react';
import { Participant } from './Participant';
import shuffle from './shuffle';




const App = () => {
    const [participants, setParticipants] = useState<string[]>([]); //Create an array of participants
    const [drawedList, setDrawedList] = useState<{ giver: string; receiver: string }[]>([]);
    useEffect(() => {
        console.log(participants);
    }, [participants]
    )
    const addParticipant = (newParticipant: string) => {
        if (participants.includes(newParticipant)) return;
        setParticipants([...participants, newParticipant]);
    };

    const handleDraw = () => {
        if (participants.length >= 3) {
            const shuffled = shuffle(participants);
            const result = shuffled.map((value, index) => {
                return {
                    giver: value,
                    receiver: shuffled[index + 1] || shuffled[0]
                }
            });
            setDrawedList(result);
        }
        else { alert("Invalid number of participants! :( ") }
    }

    const handleRemove = (participantToRemove:string) => {
         setParticipants(participants.filter(participant => participant !== participantToRemove));
     }

    const handleReset = () => {
        setParticipants([]);
        setDrawedList([]);
    }

    return (
        <>
            <div>
                <h1>Secret Santa Draw App</h1>
                <h2>Please enter the name of each participant and then click 'ADD NAME'. When finished, click 'DRAW SECRET SANTA'.</h2>
                <Participant onClick={addParticipant} />
            </div>

            <div>
                <h3>Participants list:</h3>
                <ul>
                    {participants.map((participant, index) => {
                        return (<li key={index}>{participant}
                            {
                        <button onClick={() => handleRemove(participant)}>REMOVE</button>}
                        </li>
                        )
                    }
                    )}
                </ul>
            </div>

            <div>
                <button onClick={handleDraw}>DRAW SECRET SANTA</button>
                <button onClick={handleReset}>RESET</button>
                <h3>Draw results:</h3>
                <ul>
                    {drawedList.map(({ giver, receiver }, index) => {
                        return <li key={index}>GIVER: {giver}       |         RECEIVER: {receiver}</li>
                    }
                    )}
                </ul>
            </div>
        </>

    );
}

export default App;


