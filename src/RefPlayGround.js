import { useState, useEffect, useMemo } from 'react';

export default function RefPlayGround() {
    const [showSurprise, setShowSurprise] = useState(false);
    const [data, setData] = useState(null);

    // const expensiveCalculation = useMemo(() => {
        // ✅ Does not re-run unless todos change
        // useMemo won’t make the first render faster. It only helps you skip unnecessary work on updates.
        // some very expensive calculation to be used in the State
        // return "123123"; 
    // }, [data]);

    useEffect(() => {
        // do something
        // use expensiveCalculation to do something expensive

        // clean up method: runs everytime before useEffect runs again, + on unmount
        // return () => { do your cleanup}
    }, [])
    // no [],  This runs after every render
    // [] run once onmount
    // [a, b] This runs on mount *and also* if either a or b have changed since the last render

    useEffect(() => {
        fetch('https://randomuser.me/api') // fetch as usual here!
            .then(results => results.json())
            .then(data => {
                setData(data.results[0]);
            });
    }, []);


    if(true) {
        // setSomeStateNow();
        // this is called "update state during rendering"
        // When you update a component during rendering, React throws away the returned JSX and immediately retries rendering.
        // To avoid very slow cascading retries, React only lets you update the same component’s state during a render
        // You can use this to adjust the state during a prop change, but try your best to not to do this
    }

    return (
        <>
            <h1>do you want a surprise?</h1>
            {data && `${data.gender} ${data.cell} ${data.email}`}
            <h1>{showSurprise ? "BIG SURPRISE" : "NO sup"}</h1>
            <button onClick={() => setShowSurprise(true)}>Yes</button>
            <button onClick={() => setShowSurprise(false)}>No</button>
        </>
    );
}

