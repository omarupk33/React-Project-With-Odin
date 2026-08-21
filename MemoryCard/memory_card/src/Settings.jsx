import { useEffect, useState } from "react"
import Win from "./Win"
import Lose from "./Lose"
import { use } from "react"

function Settings({pointUp, hearts,setHearts , isFound, inputValue, handleValue}){
    
    const [curr, setCurrent] = useState(0)

    useEffect(()=>{
        if(pointUp !==0){
         setCurrent(curr +1)}
    }, [pointUp])

    useEffect(()=>{
        setCurrent(0)
    },[inputValue])

  const handleRefresh = () => {
    window.location.reload();
  };


    return (
        <div className='settings-container'>
        <div>
            <h1>Score: {curr}</h1>
        </div>

        <div>
            <h1>
                ❤️: {hearts}
            </h1>
        </div>
        <Lose hearts={hearts} score={curr} handleRefresh={handleRefresh}>
        </Lose>

        <Win hearts={hearts}  score={curr} isFound={isFound} handleRefresh={handleRefresh}>
        </Win>
        <div>
        <label htmlFor="api_search">Change Cards: </label>
        <input name="api_search" id="api_search" type="text" 
        value={inputValue} onChange={handleValue}/>    
        </div>
        
        </div>
    )
}

export default Settings
