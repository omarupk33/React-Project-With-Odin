import  {useState}  from 'react';
import Form from './Form';

function Window(){
    
    const [index, setIndex] = useState(0)

    const forms = [
    {index:0, title:'Personal Info', text:['Name', 'Email'], number:[ 'Phone Numbers']},
    {index:1, title:'Education Info',text:['school Name', 'Title of study'], date:['Date of study']},
    {index:2, title:'Career Info',   text:['Company name' , 'Position title', 'Main responsibilities of your jobs'],
    date:['started working at', 'to']},
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
            {forms.map((object)=>{
           return  <Form title={object.title} text = {object.text} number={object.number ?? []}
           date={object.date ?? []}
            key={object.index}
            className = {index === object.index ? 'active': 'inactive'}
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