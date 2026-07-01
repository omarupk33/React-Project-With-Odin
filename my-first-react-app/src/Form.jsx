function Form({Fields}){

    const allInputs = Fields.map((element) =>{
        return (
        <div key={element}>
        <label htmlFor={element}>{element}</label>
        <input type="text" name={element} id={element} />        
        </div>
      )
    })

    return(
        <section>
        <form>
        {allInputs.map((element) =>{
            return element
        })}
        </form>
        </section>

    )
}

export default Form