import { useState } from "react"

function Form({Fields, values, setValues, className}){

    const allInputs = Fields.map((element) =>{

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

    return(
        <section className={className}>
            <h2>Make A CV</h2>
        <form>
        {allInputs.map((element) =>{
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