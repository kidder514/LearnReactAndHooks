import { createContext, useReducer, useContext } from 'react';

const initialAppState = {
    isLoading: true,
    isLoggedIn: false,
}

export const AppStateContext = createContext(initialAppState);
export const AppDispatchContext = createContext(null);
export function useAppState() { return useContext(AppStateContext)};
export function useAppStateDispatch() { return useContext(AppDispatchContext)};

export function AppStateProvider({children}) {
    const [appState, dispatch] = useReducer(appStateReducer, initialAppState);
    
    return (
        <AppStateContext.Provider value={appState}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
}

// todo add worklist action creater
function appStateReducer(appState, action) {
    switch(action.type) {
        case 'login':
            return {...appState, isLoggedIn: true};
        case 'logout':
            return {...appState, isLoggedIn: false};
        case 'startLoading':
            return {...appState, isLoading: true};
        case 'stopLoading':
            return {...appState, isLoading: false};
        default: 
            throw Error('unknown action: ' + action.type);
    }
}
