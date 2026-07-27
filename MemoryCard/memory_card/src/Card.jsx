import { useState } from "react"

function Card({num}){
        const [focused, setFocus] = useState('notFocused')
        const focusStyle = ()=>{
         setFocus('focused')
        }
    return (
        <div onMouseEnter={()=>{focusStyle()}} className= {focused ? focused : ''}
             onMouseLeave={()=>{setFocus('notFocused')}}
        tabIndex={0}>{num}</div>
    )
}


export default Card