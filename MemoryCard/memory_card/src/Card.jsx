import { useState, useEffect } from "react"


function Card({num}){


    const [data, setData] = useState([])    


    async function fetchData(){
        try{
            const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
                if(!response.ok){
                throw new Error(`Error: ${response.status}`)}
            
            const json = response.json()
            setData(json)

            } catch (error) {
        console.error('Fetch operation failed:', error.message);
        }
        }
        fetchData()
        console.log(data)


    // useEffect(()=>{


    // }, [data])



        const [focused, setFocus] = useState('')
        const focusStyle = ()=>{
        if(!focused){setFocus('focused')}
        else(setFocus(''))
        }

    return (
        <div onClick={()=>{focusStyle()}} className= {focused ? focused : ''}
        tabIndex={0}>{data}</div>
    )
}


export default Card