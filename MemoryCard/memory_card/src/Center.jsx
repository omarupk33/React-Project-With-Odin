import { useState, useEffect, use } from "react"
import Card from './Card'

function Center(){
    const [data, setData] = useState([])
    const [listOfCards, setListOfCards ]= useState([])
    const [flip, setFlip] = useState({})

    function handleFlip(id, state){
        // if(!Object.keys(flip).includes(id)){
            setFlip({...flip, [id]:state})
        // }
    }

    console.log(flip)

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
                cards.push(<Card num={i} data={data} key={i+'-'+j} handleFlip={handleFlip} ></Card>)
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
             .map(
                e => e)
             }
        </center>
    )
}

export default Center