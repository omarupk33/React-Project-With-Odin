import { useEffect, useState } from "react"

function Counter({current}){
    
    const [curr, setCurrent] = useState(0)
    const [best, setBest] = useState(0)

// Something is wrong here
    useEffect(()=>{
         if(curr>best) setBest(curr)
    }, [curr]) 


    const updateBest =() => {
        setCurrent(prev => prev +1)
    }

    return (
        <div className='count-container'>
        <div>
            <h1>{curr}</h1>
            <button onClick={()=>{updateBest()}}> Increment by one</button>
        </div>
        <div>
            <h1>{best}</h1>
            <button onClick={()=>{setCurrent(curr-1)}}> decrease by one</button>           
        </div>
  

        </div>
    )
}

export default Counter
