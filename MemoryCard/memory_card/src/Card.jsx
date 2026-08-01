import { useState, useEffect } from "react"


function Card({num}){


    const [data, setData] = useState([])    

    
    useEffect(()=>{
    async function fetchData(){
        
        try{
            // Change to giphy api
            const response = await fetch('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2N3NGRzdWhoeXkzbHpiY3F6dXdrcnRyNDVuYmJ4Mmk5NHFweG1udCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/igKgfEieleNP5YY0ag/giphy.gif')
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
            console.log(data)



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