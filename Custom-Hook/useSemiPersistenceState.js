import { useState,useEffect, useRef } from 'react';
function useSemiPersistenceState(key,initValue) {
    const [persistant, setpersistant] = useState(localStorage.getItem(key)||initValue);  
const firstRender = useRef(false);
 const prevState= useRef()
  useEffect(() => {
    if (firstRender.current)
        {localStorage.setItem(key,persistant)
        console.log("re render the component")
        prevState.current=persistant
        }
    else
        {
          alert("initial rendering")
          firstRender.current = true;
        }
    
    
    
  }, [key,persistant]);
    return [persistant,setpersistant,prevState.current]
}

export default useSemiPersistenceState;