import { useState, useEffect } from "react"
import Card from './Card'

function Center(){
    const [data, setData] = useState([])

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


    const [listOfCards, setListOfCards ]= useState([])

    useEffect(()=>{
        let cards = []
        let manageCards = () =>{
            // Adding usestate to a list is forbidden. Look through other sols
            if(Object.values(data).at(0)){
            for(let i = 0; i <= 7; i++){
                for(let j = 0; j < 2;j++){
                cards.push(<Card num={i} data={data} key={i+'-'+j}></Card>)
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


    console.log(listOfCards)


    }, [data])


    return (
        <center>  
            
            {listOfCards
             .map(
                // Shuffle cards here
                e => e)
             }
        </center>
    )
}

export default Center