import Card from './Card'

function Center(){
    return (

    // split up some of the logic to new two parents and make this each parent take a row for itself
    // When a card is hovered over, use transition to move it to the center of the screen.  
    
    // We need focused for the parent as well


        <center>
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
        <Card num={8}></Card>
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