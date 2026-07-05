import  {useState}  from 'react';
import Form from './Form';

function Window(){
    
    const [index, setIndex] = useState(0)

    const forms = [
    ['name', 'email','Phone Numbers'],
    ['school name', 'title of study', 'date of study'],
    ['company name' , 'position title', 'main responsibilities of your jobs',
    'date from and until when you worked for that company'],
    ]

        // For forward button
    function navigateFront(){
        if (index !== forms.length - 1){
            setIndex(index+1)
        }
        else{
            setIndex(0)
        }
        console.log(index)

    }
    // For backward button
    function navigateBack(){
        if (index !== 0){
            setIndex(index-1)
        }
        else{
            setIndex(forms.length-1)
        }
        console.log(index)
    }
    

    return (
    <div className='window'>
        <button onClick={navigateBack}>
        {'<'}
        </button>
        <div className="form_section">
            {forms.map((value)=>{
           return  <Form Fields = {value} key={forms.indexOf(value)}
            className = {index === forms.indexOf(value) ? 'active': 'inactive'}
            ></Form>
            })}
        </div>
        <button onClick={navigateFront}>
        {'>'}
        </button>
    </div>
    )
}

export default Window