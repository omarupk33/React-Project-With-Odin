import { useEffect, useState } from "react"
import Win from "./Win"
import Lose from "./Lose"

function Counter({pointUp, hearts,setHearts, handleReplay , isFound}){
    
    const [curr, setCurrent] = useState(0)
    const [best, setBest] = useState(0)

    useEffect(()=>{
        if(pointUp !==0){
         setCurrent(curr +1)}
    }, [pointUp])


    useEffect(()=>{
         if(curr>best) setBest(curr)
    }, [curr]) 

    return (
        <div className='count-container'>
        <div>
            <h1>Score: {curr}</h1>
        </div>
        <div>
            <h1>Best Score: {best}</h1>        
        </div>

        <div>
            <h1>
                ❤️: {hearts}
            </h1>
        </div>
        <Lose hearts={hearts} score={best} handleReplay={handleReplay}>
        </Lose>

        <Win hearts={hearts}  score={best} isFound={isFound} handleReplay={handleReplay}>
        </Win>

        </div>
    )
}

export default Counter
