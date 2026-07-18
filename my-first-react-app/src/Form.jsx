import { useState } from "react"


function Form({title ,text, number, values , setValues, date,
     className
    }){



    const handleChange = (e, field) => {
            setValues((prev) => ({...prev, [field]: e.target.value,}))
        }

    return ( 
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
                    required={true}
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
                    required='true'
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
                    required='true'
                />
                </div>
            ))}
        </form>

        </section>
    )
}

export default Form