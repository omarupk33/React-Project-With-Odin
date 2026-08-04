import { useState, useEffect } from "react"


function Card({ num, data}){
    // Since we changed the location of the fetchData, we need to do a bit of changes to fix the code and make it work properly

        let image
        if(data){
          image = <img width='150vw' height='130vw' src={Object.values(data).at(0).at(num).images.original.url}
          alt={Object.values(data).at(0).at(num).url} />
        }
    

        const [focused, setFocus] = useState('')
        const focusStyle = ()=>{
        if(!focused){setFocus('focused')}
        else(setFocus(''))
        }

    return (
        <div onClick={()=>{focusStyle()}} className= {focused ? focused : ''}
        tabIndex={0}>
        {image}

        </div>
    )
}

export default Card