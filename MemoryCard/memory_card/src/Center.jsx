import { useState, useEffect } from "react"
import Card from './Card'

function Center(){
    const [data, setData] = useState([])

    useEffect(()=>{
    async function fetchData(){
        try{
            const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=6uFEXyu7kVpkQyoPVtRKjyWKG1viZl7H&q=memes&limit=16&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
                if(!response.ok){
                throw new Error(`Error: ${response.status}`)}
            
            const json = await response.json()
            setData(json)

            }            
        catch (error) {
        // console.error('Fetch operation failed:', error.message);
    }
    }

    fetchData()

    }, [])


    // The card game I decided to make is a matching cards type of games.

    return (
        <center>  
        <Card num={0} data={data}></Card>
        <Card num={1} data={data}></Card>
        <Card num={2} data={data}></Card>
        <Card num={3} data={data}></Card>
        <Card num={4} data={data}></Card>
        <Card num={5} data={data}></Card>
     

        <Card num={6} data={data}></Card>
        <Card num={7} data={data}></Card>
        <Card num={0} data={data}></Card>
        <Card num={1} data={data}></Card>
        <Card num={2} data={data}></Card>
   

        <Card num={3} data={data}></Card>
        <Card num={4} data={data}></Card>
        <Card num={5} data={data}></Card>
        <Card num={6} data={data}></Card>
        <Card num={7} data={data}></Card>


        </center>
    )
}

export default Center