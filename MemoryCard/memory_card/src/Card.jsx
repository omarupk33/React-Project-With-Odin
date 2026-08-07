import { useState, useEffect } from "react"


function Card({ num, data}){
    // Since we changed the location of the fetchData, we need to do a bit of changes to fix the code and make it work properly

        let image
        if(Object.values(data).at(0)){
          image = <img  width='100%' height='100%' src={Object.values(data).at(0).at(num).images.original.url}
          alt={Object.values(data).at(0).at(num).url} />
        }
    

        const [focused, setFocus] = useState('')
        const focusStyle = ()=>{
        if(!focused){setFocus('focused')}
        else(setFocus(''))
        }

    return (
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                {image}
                </div>

                <div className="flip-box-back">
                </div>
            </div>
        </div>



    )
}

export default Card