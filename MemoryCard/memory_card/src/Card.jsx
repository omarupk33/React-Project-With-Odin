import { use } from "react"
import { useState, useEffect } from "react"


function Card({ num, data, handleFlip, removeFlip,full, handleReplay, found }){
        
        const [clicked, isClicked] = useState('')
        let image

        if(Object.values(data).at(0)){
          image = <img  width='100%' height='100%' src={Object.values(data).at(0).at(num).images.original.url}
          alt='gif'/> 
        }

        useEffect(()=>{
            isClicked('')
        }, [handleReplay])



            const focusStyle = ()=>{
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