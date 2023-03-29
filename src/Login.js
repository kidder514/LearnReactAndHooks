import { useEffect } from 'react';
import { useAppState, useAppStateDispatch} from './context/AppStateContext';

//! in development React remounts every component once immediately after its initial mount.
export default function Login() {
    const appState = useAppState();
    const dispatch = useAppStateDispatch();

    useEffect(() => {
        dispatch({type: 'stopLoading'});
        // the denpendency will warning you, and if you dont want to add appState and dispatch to it
    },[]);
    // react rule, dont add function or object as part of the depenedency because Object.is() doesnt work for them well

    return (
        <div>
            {appState.isLoading && <h1>the app is loading!!!</h1>}
            {appState.isLoggedIn ? renderLoggedIn() : renderNotLoggedIn()}
        </div>
    )

    function renderLoggedIn() {
        return (
            <>
                <div>you are logged in</div>
                <div>DO you want to logout?</div>
                <div>
                    <button onClick={() => dispatch({type: 'logout'})}>logout</button>
                </div>
            </>
        );
    }
    
    function renderNotLoggedIn() {
        return (
            <>
                <div>you are not logged in</div>
                <div>please login</div>
                <div>
                    Please login here
                    <button onClick={() => dispatch({type: 'login'})}>login!!</button>
                </div>
            </>
        );
    }
}

