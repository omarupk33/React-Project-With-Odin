import { useEffect, useState } from "react"

function Counter({current}){
    
    const [curr, setCurrent] = useState(0)

    let best = 0
// Something is wrong here
    useEffect(()=>{

         best = 1
    }, [curr]) 


    const updateBest =() => {
        setCurrent(prev => prev +1)
    }

    return (
        <div className='count-container'>
        <h1>{curr}</h1>
        <h1>{best}</h1>
        <button onClick={()=>{updateBest()}}> Increment by one</button>
        <button onClick={()=>{setCurrent(curr-1)}}> decrease by one</button>

        </div>
    )
}

export default Counter
