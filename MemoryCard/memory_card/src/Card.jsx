import { useState } from "react"

function Card({num}){
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