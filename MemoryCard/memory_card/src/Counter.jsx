import { useEffect, useState } from "react"

// Change slightly to fit the task it's assigned to 
function Counter({current}){
    
    const [curr, setCurrent] = useState(0)
    const [best, setBest] = useState(0)

    useEffect(()=>{
         if(curr>best) setBest(curr)
    }, [curr]) 


    const updateBest =() => {
        setCurrent(prev => prev +1)
    }

    return (
        <div className='count-container'>
        <div>
            <h1>Score: {curr}</h1>
        </div>
        <div>
            <h1>Best Score: {best}</h1>        
        </div>
  
        </div>
    )
}

export default Counter
