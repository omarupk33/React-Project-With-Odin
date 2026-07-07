import { useState } from "react"

// Make it receive more props to work with
// Help with specifying the type to make the input suitable 
// Great work! 



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
        <label htmlFor={element}>{element}</label>
        <input type='date'
        value={value}
        onChange={handleChange}
        name={element} id={element} />        
        </div>
      )
    })
    


    return(
        <section className={className}>
            <h2>{title}</h2>
        <form>
        {allText.map((element) =>{
            return element
        })}

        {allNumber.map((element) =>{
            return element
        })}

        {allDate.map((element) =>{
            return element
        })}
        </form>
        <button>
            Submit
        </button>
        </section>
    )
}

export default Form