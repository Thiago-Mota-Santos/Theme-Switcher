import { useState, useEffect } from "react"


function useStatePersisted(key: string, initialStage: any){
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)
        
        if (storageValue){
            return JSON.parse(storageValue);
        } else {
            return initialStage;
        }
        
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState];
 
}

export default useStatePersisted