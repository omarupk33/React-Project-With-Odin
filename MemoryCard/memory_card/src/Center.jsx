import Card from './Card'
import Counter from './Counter'
function Center(){


    // const [data, setData] = useState([])    

    
    // useEffect(()=>{
    // async function fetchData(){
        
    //     try{
    //         // Change to giphy api
    //         const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=6uFEXyu7kVpkQyoPVtRKjyWKG1viZl7H&q=yugioh&limit=16&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips')
    //             if(!response.ok){
    //             throw new Error(`Error: ${response.status}`)}
            
    //         const json = await response.json()
    //         setData(json)

    //         }            
    //         catch (error) {
    //     console.error('Fetch operation failed:', error.message);
    //     }

    //     }
    //     fetchData()

    //     // alert here
    // }, [num])

    //          console.log(Object.values(data).at(0).at({num}).images.original.url)

    return (

        <center>  
         <Counter></Counter>
        <div className='column1'>
        {/* <Card num={1}></Card>
        <Card num={2}></Card>
        <Card num={3}></Card>
        <Card num={4}></Card>
        <Card num={5}></Card> */}

        </div>

        <div className='column3'>
        {/* <Card num={6}></Card>
        <Card num={7}></Card> */}
        {/* <Card num={8}></Card> */}
        {/* <Card num={9}></Card>
        <Card num={10}></Card> */}
        </div>
        
        <div className='column2'>
        {/* <Card num={11}></Card>
        <Card num={12}></Card>
        <Card num={13}></Card>
        <Card num={14}></Card>
        <Card num={15}></Card> */}
        </div>

        </center>
    )
}

export default Center