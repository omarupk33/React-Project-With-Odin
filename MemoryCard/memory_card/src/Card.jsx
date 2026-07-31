import { useState, useEffect } from "react"


function Card({num}){


    const [data, setData] = useState([])    

    
    useEffect(()=>{
    async function fetchData(){
        
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
                if(!response.ok){
                throw new Error(`Error: ${response.status}`)}
            
            const json = response.json()
            setData(json)

            }            
            catch (error) {
        console.error('Fetch operation failed:', error.message);
        }

        }
    fetchData()


    }, [num])
            console.log(data.forms.at(0))



        const [focused, setFocus] = useState('')
        const focusStyle = ()=>{
        if(!focused){setFocus('focused')}
        else(setFocus(''))
        }

    return (
        <div onClick={()=>{focusStyle()}} className= {focused ? focused : ''}
        tabIndex={0}>{num}</div>
    )
}


export default Card