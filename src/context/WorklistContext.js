import { createContext, useReducer, useContext } from 'react';

const initialWorklist = [
    '123',
    'lu lu',
    'anana',
    'what laa',
    'dsf',
    'sdf',
    'fd',
];

export const WorklistContext = createContext(initialWorklist);
export const WorklistDispatchContext = createContext(null);
export function useWorklist() { return useContext(WorklistContext)};
export function useWorklistDispatch() { return useContext(WorklistDispatchContext)};

export function WorklistProvider({children}) {
    const [worklist, dispatch] = useReducer(worklistReducer, initialWorklist);
    
    return (
        <WorklistContext.Provider value={worklist}>
            <WorklistDispatchContext.Provider value={dispatch}>
                {children}
            </WorklistDispatchContext.Provider>
        </WorklistContext.Provider>
    );
} 


// todo add worklist action creater
function worklistReducer(worklist, action) {
    switch(action.type) {
        case 'remove':
            return {...worklist, isLoggedIn: true};
        case 'push':
            return {...worklist, isLoggedIn: false};
        case 'pop':
            return {...worklist, isLoading: true};
        case 'shift':
            return {...worklist, isLoading: false};
        case 'unshift':
            return {...worklist, isLoading: false};
        default: 
            throw Error('unknown action: ' + action.type);
    }
}
