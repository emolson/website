import React, {useState, useEffect} from 'react'

const Hooks = () => {
    //useStates returns and array with two elements [currentState, overRideFunc()]
    const [count, setCount] = useState(0);
    const [countVisibility, setCountVisibility] = useState(true);

    //useEffect takes 2 arguments
    // 1) function, this fnc will be executed after every component rendering
    // 2) array of dependencies that if changed, rerun useEffect
    useEffect(() => {
        console.log("Hooks component mounted");
    }, [count]);

    const countIncrement = () => {
        setCount(count+1);
    };

    const countDecrement = () => {
        setCount(count-1);
    };

    const changeVisibility = () => {
        setCountVisibility(!countVisibility);
    };


    return (
        <>
            <div>Inside Hooks</div>
            <div hidden={!countVisibility}>{count}</div>
            <button onClick={countIncrement}>Inc</button>
            <button onClick={countDecrement}>Dec</button>
            <button onClick={changeVisibility}>Change Visibility</button>
        </>
    )
};


export default Hooks;
