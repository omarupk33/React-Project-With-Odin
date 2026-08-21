import { useState } from "react"

function Win({hearts, score, isFound, handleRefresh}){
    console.log(isFound.length)
    return <div className= {isFound.length === 16 ? "backdrop pop-up" : 'backdrop'}>
        <section className= {isFound.length === 16 ? 'win-screen pop-up' : 'win-screen'}>
        <h1>You Won</h1>
        <p>Score: {score}</p>
        <p>Remaining ❤️: {hearts}</p>
        <p>final Score (hearts X Score): {score*hearts}</p>
        <button onClick={handleRefresh}>Play again</button>
         </section>
         </div>
}

export default Win