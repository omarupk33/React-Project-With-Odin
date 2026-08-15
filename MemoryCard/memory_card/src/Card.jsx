import { useState, useEffect } from "react"


function Card({ num, data, handleFlip, flipped}){
        
        const [clicked, isClicked] = useState('')

        let image

        if(Object.values(data).at(0)){
          image = <img  width='100%' height='100%' src={Object.values(data).at(0).at(num).images.original.url}
          alt='gif'/>
          
        }

            const focusStyle = ()=>{
            // if(flipped.length < 2)
            if(!clicked){isClicked('clicked')
            handleFlip(num)

            }
            else{isClicked('')
                // Do something here to remove the num from the list
                // handleFlip(num - 1)?

            }
        }
            // }


    return(
        <div className={clicked ? 'flip-box clicked' : 'flip-box'} onClick={focusStyle}>
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