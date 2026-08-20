import { useState } from "react"

function Win({hearts, score, isFound, handleReplay}){

    return
    <div className= {isFound.length === 16 ? "backdrop pop-up" : 'backdrop'}>
    <section className= {isFound.length === 16 ? 'win-screen pop-up' : 'win-screen'}>
        <h1>You Won</h1>
        <h1>Your Score: {score}</h1>

         </section>
         </div>
}

export default Win