import { useState } from "react"

function Win({hearts, score, isFound}){
    // const [replay, setReplay] = useState()

    return
    <div className= {hearts === 9 ? "backdrop pop-up" : 'backdrop'}>
    <section className={isFound.length === 16 ? 'win-screen pop-up' : 'win-screen pop-off'}>

        <h1>You Won</h1>
         </section>
         </div>
}

export default Win