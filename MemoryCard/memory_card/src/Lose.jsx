function Lose({hearts, score, handleRefresh}){



    return <div className= {hearts === 0 ? "backdrop pop-up" : 'backdrop'}>
        <section className={ hearts === 0 ? "lose-screen pop-up" : 'lose-screen'}>
        <h1>You Lost</h1>
        <p>Score: {score}</p>
        <p>Remaining ❤️: {hearts}</p>
        <p>final Score (hearts X Score): Noobie 🥺</p>

        <button onClick={handleRefresh}> Play again</button>
    </section>

    </div>
}

export default Lose