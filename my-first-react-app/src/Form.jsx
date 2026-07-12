import { useState } from "react"


function Form({title ,text, number, values , setValues, date, className}){


    // const allText = text.map((element) =>{

    const handleChange = (e, field) => {
            setValues((prev) => ({...prev, [field]: e.target.value,}))
            console.log(e.target.value)
        }


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
        {text.map((field) => (
                <div key={field}>
                <label htmlFor={field}>{field}:</label>
                <input
                    id={field}
                    name={field}
                    value={values[field] || ""}
                    onChange={(e) => handleChange(e, field)}
                />
                </div>
            ))}

        {number.map((field) => (
                <div key={field}>
                <label htmlFor={field}>{field}:</label>
                <input
                    id={field}
                    type="tel"
                    name={field}
                    value={values[field] || ""}
                    onChange={(e) => handleChange(e, field)}
                />
                </div>
            ))}

            {date.map((field) => (
                <div key={field}>
                <label htmlFor={field}>{field}:</label>
                <input
                    id={field}
                    type="date"
                    name={field}
                    value={values[field] || ""}
                    onChange={(e) => handleChange(e, field)}
                />
                </div>
            ))}

        
        </form>
        <button>
            Submit
        </button>
        </section>
        </div>
    )
}

export default Form