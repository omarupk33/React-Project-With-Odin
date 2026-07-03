import { useState } from 'react';


function Window(){

    const [index, setIndex] = useState(0)

    const forms = [
    <Form Fields = {['name', 'email','Phone Numbers']}></Form>,
    <Form Fields = {['school name', 'title of study', 'date of study']}></Form>,
    <Form Fields = {['company name' , 'position title', 'main responsibilities of your jobs', 'date from and until when you worked for that company']} ></Form>
    ]

        // For forward button
    function navigateFront(){
        if (index > forms.length){
            setIndex(index+1)
            alert(index+1)
        }
    }
    // For backward button
    function navigateBack(){
        if (index !== 0){
            setIndex(index-1)
            alert(index-1)}
    }
    

    return (
    <div className='window'>
        <button className='backward' onClick={navigateBack}>
        {'<'}
        </button>
        <div className="form_section">
            {forms.at(index)}
        </div>
        <button className='forward' onClick={navigateFront}>
        {'>'}
        </button>
    </div>
    )
}