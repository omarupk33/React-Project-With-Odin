import { useState, useEffect, use } from "react"
import Card from './Card'
import Counter from './Counter'


function Center(){
    const [data, setData] = useState([])
    const [listOfCards, setListOfCards]= useState([])
    const [flipped, setFlip] = useState([])
    const [isFound, setFound] = useState([])
    const [pointUp, setPointUp] = useState(0)
    const [isFull, setFull] = useState(false)

    function handleFlip(num){
        setFlip((prev) => [...prev, num])
        
    }




    function removeFlip(num){
            setFlip(prev => prev.filter((item) => item !== num))
    }
    
    console.log(flipped)
    // console.log(isFull)

 

    // For Counter component
    useEffect(()=>{

        setFull(flipped.length >= 2)
        if(Number.isInteger(flipped[0]) &&
        flipped[0] === flipped[1]){
        setFound(prev => [...prev, flipped[0]])
        setFlip(prev => flipped.filter(c => !isFound.includes(c)))
    }
  
        

    }, [flipped])


    useEffect(()=>{
    async function fetchData(){
        try{
            const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=6uFEXyu7kVpkQyoPVtRKjyWKG1viZl7H&q=fate%20Shiro&limit=16&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
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
    }, [])


    
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



            {listOfCards
             .map((e, index)=>{
                let found = false
                // Ato scoshi dake
                if(isFound.includes(e.num)){
                    found = true
                    
                }

               return <Card num={e.num} data={data} key={index} handleFlip={handleFlip}
                removeFlip={removeFlip}found={found} full={isFull}></Card>
                })
             }

        </center>
    )
}

export default Center