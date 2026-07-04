import  {useState}  from 'react';
import Form from './Form';

function Window(){
    
    const [index, setIndex] = useState(0)

    const forms = [
    <Form Fields = {['name', 'email','Phone Numbers']}></Form>,
    <Form Fields = {['school name', 'title of study', 'date of study']}></Form>,
    <Form Fields = {['company name' , 'position title', 'main responsibilities of your jobs', 'date from and until when you worked for that company']} ></Form>
    ]

        // For forward button
    function navigateFront(){
        // if (index !== forms.length - 1){
            setIndex(index+1)
        // }
    }
    // For backward button
    function navigateBack(){
        // if (index !== 0){
            setIndex(index-1)
        // }
    }
    

    return (
    <div className='window'>
        <button className={index === 0 ? 'inactive': 'active'} onClick={navigateBack}>
        {'<'}
        </button>
        <div className="form_section">
            {forms.at(index)}
        </div>
        <button className={index === forms.length -1 ? 'inactive': 'active'} onClick={navigateFront}>
        {'>'}
        </button>
    </div>
    )
}

export default Window