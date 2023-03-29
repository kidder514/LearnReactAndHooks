import { useRef } from "react";
import { useAppState } from "./context/AppStateContext"
import { useWorklist, WorklistProvider } from "./context/WorklistContext";


// learn to add ref too a list of items
// you can keep the local variable update in ref, like a setInterval timer
export default function Worklist() {
    const worklist = useWorklist();
    const appState = useAppState();
    const itemsRef = useRef(null);
    
    function getMap() {
        if (!itemsRef.current) {
            itemsRef.current = new Map();
        }

        return itemsRef.current;
    }

    function randomChange(index) {
        const map = getMap();
        map.get(index).textContent = "random thing";
    }

    if (!appState.isLoggedIn) {
        return (
            <div>you need to log in to see the worklist</div>
        );
    }

    return (
        <WorklistProvider>
            <h1>worklist</h1>
            <div>
                <ul>
                    {worklist.map((item, index) => <li key={`worklist-key=${index}`} onClick={(e) => randomChange(index)} ref={(node) => {
                        const map = getMap();
                        if (node){
                            map.set(index, node)
                        } else {
                            map.delete(index)
                        }
                    }}>{item} - the index is {index}</li>)}
                </ul>
            </div>
        </WorklistProvider>
    )
}