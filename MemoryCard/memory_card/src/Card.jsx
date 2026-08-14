import { useState, useEffect } from "react"


function Card({ num, data, handleFlip, card1, card1Handle}){
        
        const [clicked, isClicked] = useState('')
        const [found, setFound] = useState(false)
        let image

        if(Object.values(data).at(0)){
          image = <img  width='100%' height='100%' src={Object.values(data).at(0).at(num).images.original.url}
          alt='gif'/>
          
        }

        let lengthOfCardArrays
        useEffect(()=>{
            setFound(handleFlip(num))
            let allClickedCards = document.querySelectorAll('.clicked')
            lengthOfCardArrays = allClickedCards.length
            console.log(lengthOfCardArrays)
            
            return ()=>{
                allClickedCards = []
                lengthOfCardArrays = 0
            }
        }, [clicked])


            const focusStyle = ()=>{
            if(lengthOfCardArrays < 2){
            if(!clicked){isClicked('clicked')}
            else(isClicked(''))}
            }


    return(
        <div className={clicked ? 'flip-box clicked' : 'flip-box'} onClick={focusStyle}>
            <div className="flip-box-inner">
                <div className="flip-box-front">
                </div>
                <div className={found ? 'flip-box-back found' : 'flip-box-back'}>
                {image}
                </div>
            </div>
        </div>
    )
}

export default Card