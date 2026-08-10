import { useState, useEffect } from "react"


function Card({ num, data, handleFlip, card1, card1Handle}){
        
        const [clicked, isClicked] = useState('')

        let image
        if(Object.values(data).at(0)){
          image = <img  width='100%' height='100%' src={Object.values(data).at(0).at(num).images.original.url}
          alt='gif'/>

            let gifId = Object.values(data).at(0).at(num).id

          
            useEffect(()=>{
                handleFlip(gifId)
            }, [clicked])
            }

            const focusStyle = ()=>{
            if(!clicked){isClicked('clicked')}
            else(isClicked(''))
            }

    return(
        <div className={clicked ? 'flip-box clicked' : 'flip-box'} onClick={focusStyle}>
            <div className="flip-box-inner">
                <div className="flip-box-front">
                </div>
                <div className="flip-box-back">
                {image}
                </div>
            </div>
        </div>
    )
}

export default Card