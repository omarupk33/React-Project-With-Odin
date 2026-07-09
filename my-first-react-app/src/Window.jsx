import  {useState}  from 'react';
import Form from './Form';

function Window(){
    
    const [index, setIndex] = useState(0)
    
    const forms = [
    {index:0, title:'Personal Info', text:['Name', 'Email'], number:[ 'Phone Numbers']},
    {index:1, title:'Education Info',text:['School Name', 'Title of Study'], date:['Date Of Study']},
    {index:2, title:'Career Info',   text:['Company Same' , 'Position Title', 'Main Responsibilities Of Your Jobs'],
    date:['Started Working At', 'To']},
    ]

        // For forward button
    function navigateFront(){
        if (index !== forms.length - 1){
            setIndex(index+1)
        }
        else{
            setIndex(0)
        }
    }
    // For backward button
    function navigateBack(){
        if (index !== 0){
            setIndex(index-1)
        }
        else{
            setIndex(forms.length-1)
        }
    }
    

    return (
        <div className='main-content'>
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