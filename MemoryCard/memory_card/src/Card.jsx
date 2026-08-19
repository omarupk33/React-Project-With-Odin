import { useState, useEffect } from "react"


function Card({ num, data, handleFlip, removeFlip,full, clearFlip, found }){
        
        const [clicked, isClicked] = useState('')
        let image

        if(Object.values(data).at(0)){
          image = <img  width='100%' height='100%' src={Object.values(data).at(0).at(num).images.original.url}
          alt='gif'/> 
        }


            const focusStyle = ()=>{
            // Change something here so we can seperate the logic that flips the card
            // and the logic that remove num from removeFlip
            if(!full){
            if(!clicked){
                isClicked('clicked')
                handleFlip(num)
            }
            
            else{
                isClicked('')
                removeFlip(num)
            }}
            else{
            if(clicked){
                isClicked('')
                removeFlip(num)
            }}


        
        }


    return(
        <div className={clicked || found ?  'flip-box clicked' : 'flip-box'} onClick={focusStyle}>
            <div className="flip-box-inner">
                <div className="flip-box-front">
                </div>
                <div className={'flip-box-back'}>
                {image}
                </div>
            </div>
        </div>
    )
}

export default Card