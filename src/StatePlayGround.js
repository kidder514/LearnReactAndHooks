import { useState } from 'react';

// statePlayGround
export default function StatePlayGround() {
    const [number, setNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    // keeping all data grouped in an object is very convenient—as long as you update it correctly!
    // Local mutation is fine
    // !!!!Array and object, you need to create a new one otherwise react wont notice the change, because the js call by reference nature

    // React persist the state as long as the position in the tree(not jsx) is still there, 
    // key can be used to reset state
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    return (
        <>
            {renderForm()}
            <h1>{number}</h1>
            <button onClick={() => {
                // this wont work, just like the old this.setState()
                setNumber(number + 1);// This means update it to 0 + 1
                setNumber(number + 1);// This means update it to 0 + 1
                setNumber(number + 1);// This means update it to 0 + 1
            }}>+3</button>

            <h1>{secondNumber}</h1>
            <button onClick={() => {
                // this works //n => n + 1 is called an updater function, 
                setSecondNumber(n => n + 1); // n = 0, then return 0+1
                setSecondNumber(n => n + 1); // taking n from the last result, n = 1, then return 1 + 1
                setSecondNumber(n => n + 1); // taking n from the last result, n = 2, then return 2 + 1
                // 
            }}>+3</button>
        </>
    )

    function renderForm() {
        function handleFirstNameChange(e) {
            setPerson({
                ...person,
                firstName: e.target.value
            });
        }

        function handleLastNameChange(e) {
            setPerson({
                ...person,
                lastName: e.target.value
            });
        }

        function handleEmailChange(e) {
            setPerson({
                ...person,
                email: e.target.value
            });
        }

        return (
            <>
                <label>
                    First name:
                    <input
                        value={person.firstName}
                        onChange={handleFirstNameChange}
                    />
                </label>
                <label>
                    Last name:
                    <input
                        value={person.lastName}
                        onChange={handleLastNameChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        value={person.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <p>
                    {person.firstName}{' '}
                    {person.lastName}{' '}
                    ({person.email})
                </p>
            </>
        );
    }
}

