function Lose({hearts, score}){
    console.log(hearts)
    return <div className= {hearts === 9 ? "backdrop pop-up" : 'backdrop'}>

        <section className={ hearts === 9 ? "lose-screen pop-up" : 'lose-screen'}>
        <h1>You Lost</h1>
    
    </section>
    </div>
}

export default Lose