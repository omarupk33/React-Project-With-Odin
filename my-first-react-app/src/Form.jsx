import { useState } from "react"
import Screen from './Screen'


function Form({title ,text, number, date, values, setValues, className}){

    const allText = text.map((element) =>{

        const [value, setValue] = useState('')

        const handleChange = (e)=>{
            setValue(e.target.value)
        } 

        return (
        <div key={element}>
        <label htmlFor={element}>{element}</label>
        <input type="text"
        value={value}
        onChange={handleChange}
        name={element} id={element} />        
        </div>
      )
    })


        const allNumber = number.map((element) =>{

        const [value, setValue] = useState('')

        const handleChange = (e)=>{
            setValue(e.target.value)
        }

        return (
        <div key={element}>
        <label htmlFor={element}>{element}</label>
        <input type="tel"
        value={value}
        onChange={handleChange}
        name={element} id={element} />        
        </div>
      )
    })

       const allDate = date.map((element) =>{

        const [value, setValue] = useState('')

        const handleChange = (e)=>{
            setValue(e.target.value)
        }

        return (
        <div key={element}>
        <label htmlFor={element}>{element}:</label>
        <input type='date'
        value={value}
        onChange={handleChange}
        name={element} id={element} />        
        </div>
     )
    })
    


    return ( 
    <div className='window'>

        <section className={className}>
        <h2>{title}</h2>
        <form>
        {allText.map((textInput) =>{
            return textInput
        })}

        {allNumber.map((numberInput) =>{
            return numberInput
        })}

        {allDate.map((dateInput) =>{
            return dateInput
        })}
        </form>
        <button>
            Submit
        </button>
        </section>
        </div>
    )
}

export default Form