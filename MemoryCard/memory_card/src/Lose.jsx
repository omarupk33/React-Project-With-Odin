function Lose({hearts, score, handleReplay}){



    return <div className= {hearts === 9 ? "backdrop pop-up" : 'backdrop'}>
        <section className={ hearts === 9 ? "lose-screen pop-up" : 'lose-screen'}>
        <h1>You Lost</h1>
        <h1>Your Score: {score}</h1>
        
        <button onClick={()=> handleReplay()}> Play again</button>
    </section>

    </div>
}

export default Lose