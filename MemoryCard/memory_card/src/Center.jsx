import { useState, useEffect, use } from "react"
import Card from './Card'
import Settings from './Settings'


function Center(){
    const [data, setData] = useState([])
    const [listOfCards, setListOfCards]= useState([])
    const [flipped, setFlip] = useState([])
    const [isFound, setFound] = useState([])
    const [pointUp, setPointUp] = useState(0)
    const [hearts, setHearts] = useState(10)
    const [isFull, setFull] = useState(false)
    const [value, setValue] = useState('random')



    const handleReplay = ()=>{
        setHearts(10)
        setFlip([])
        setPointUp(0)
        setFound([])
        setFull(false)      
    } 

    const handleValue = (e)=>{
        handleReplay()
        setValue(e.target.value)
    }



    function handleFlip(num){
        setFlip((prev) => [...prev, num])
    }
    function removeFlip(num){
            setFlip(prev => prev.filter((item) => item !== num))
    }
    
    function clearFlip(){
        setFlip(prev => [])
    } 

    useEffect(()=>{
        setFull(flipped.length >= 2)
        if(Number.isInteger(flipped[0]) &&
        flipped[0] === flipped[1]){
        setFound(prev => [...prev, flipped[0]])
        setPointUp(pointUp + 1)
        setFlip(prev => flipped.filter(c => !isFound.includes(c)))

    }
    else if( flipped[0] !== flipped[1] && Number.isInteger(flipped[1])){
            setHearts(hearts - 1)
        }

    }, [flipped])

    useEffect(()=>{
        let api = `https://api.giphy.com/v1/gifs/search?api_key=6uFEXyu7kVpkQyoPVtRKjyWKG1viZl7H&q=${value ? value: 'random'}&limit=16&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    async function fetchData(){
        try{
            const response = await fetch(api)
                if(!response.ok){
                throw new Error(`Error: ${response.status}`)}
            
            const json = await response.json()
            setData(json)
            }            
        catch (error) {
        console.error('Fetch operation failed:', error.message);
    }
    }

    fetchData()
    }, [value])


    
    useEffect(()=>{
        let cards = []
        let manageCards = () =>{
        if(Object.values(data).at(0)){
        for(let i = 0; i <= 7; i++){
            for(let j = 0; j < 2;j++){
            cards.push({num:i})
            }
        }
        }
    }

    function shuffle(list){
        let index = list.length
        while(index !==0){

            let randomIndex = Math.floor(Math.random() * index)
            index--
            [list[index], list[randomIndex]] = [list[randomIndex], list[index]]

        }
    }

    
    manageCards()
    shuffle(cards)
    setListOfCards(cards)

    }, [data])


    
    return (
        <center>  

            <Settings pointUp={pointUp} hearts={hearts}setHearts={setHearts}
             isFound={isFound} inputValue={value} handleValue={handleValue}
            ></Settings>
            <div className="cards-container" >
            {listOfCards
             .map((e, index)=>{
                let found = false
        
                if(isFound.includes(e.num)){
                    found = true
                    
                }

               return <Card num={e.num} data={data} key={index} handleFlip={handleFlip}
                removeFlip={removeFlip} handleReplay={value} found={found}
                full={isFull}></Card>
                })
             }
            </div>
        </center>
    )
}

export default Center