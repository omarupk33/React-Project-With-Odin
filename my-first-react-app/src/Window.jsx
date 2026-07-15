import  {useState}  from 'react';
import Form from './Form';
import Screen from './Screen'

function Window(){
    
    const [index, setIndex] = useState(0)
    
    const forms = [
    {index:0, title:'Personal Info', text:['Name', 'Email'], number:[ 'Phone Number']},
    {index:1, title:'Education Info',text:['School Name', 'Title of Study'], date:['Date Of Study']},
    {index:2, title:'Career Info',   text:['Company Name' , 'Position Title', 'Main Responsibilities Of Your Jobs'],
    date:['Started Working At', 'To']},
    ]

    const [values, setValues] = useState({})


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
            <div className='window'>
            <button className='navigation-button' onClick={navigateBack}>
            {'<'}
            </button>
            <div className="form_section">
                {forms.map((object)=>{
            return  <Form values={values} setValues={setValues} title={object.title} text = {object.text} number={object.number ?? []}
            date={object.date ?? []}
                key={object.index}
                className = {index === object.index ? 'active': 'inactive'}
                ></Form>
                })}
            </div>
            <button className='navigation-button' onClick={navigateFront}>
            {'>'}
            </button>
            </div>
            <Screen object = {values}></Screen>

        </div>    

    )
}

export default Window