import { useState, useEffect, use } from "react"
import Card from './Card'
import Counter from './Counter'


function Center(){
    const [data, setData] = useState([])
    const [listOfCards, setListOfCards ]= useState([])
    const [flipped, setFlip] = useState([])
    const [pointUp, setPointUp] = useState(0)
    const [isFull, setFull] = useState(false)

    function handleFlip(num){
        setFlip((prev) => [...prev, num])
        
    }




    function removeFlip(num){
            setFlip(prev => prev.filter((item) => item !== num))
    }
    
    console.log(flipped)
    console.log(isFull)

 

    // For Counter component
    useEffect(()=>{
        setFull(flipped.length === 2)
    }, [flipped])


    useEffect(()=>{
    async function fetchData(){
        try{
            const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=6uFEXyu7kVpkQyoPVtRKjyWKG1viZl7H&q=brawlstars%20nori&limit=16&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
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

                // Ato scoshi dake 
                if(flipped[0] === flipped[1] && flipped[0] === e.num){
                    return <div>Found</div>
                }
                 
                if(isFull){
                    setFlip([])
                    setFull(false)
                }

               return <Card num={e.num} data={data} key={index} handleFlip={handleFlip}
                removeFlip={removeFlip}flipped={flipped} full={isFull}></Card>
                })
             }

        </center>
    )
}

export default Center