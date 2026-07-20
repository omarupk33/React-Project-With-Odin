function Screen({object}){
    return (
    <div className='screen'>
        <div className="personal-info">

        <p>
        {object['Name'] || 'Full Name:'}            
        </p>
        <p>
         {object['Email'] || 'Email:'}
        </p>
        <p>
         {object['Phone Number'] || 'Phone:' }
        </p>
        </div>

        <div className="eduaction-info">
        <p>
        School Name: {object['School Name']}
        </p>

        <p>
            Title: {object['Title of Study']}
        </p>

        <p>
            Date: {object['Date Of Study']}
        </p>
        </div>
        
        <div className="company-info">

        <p>
        Company Name: {object['Company Name']}
        </p>

        <p>
            Title: {object['Position Title']}
        </p>

        <p>
            Main Responsibilities: {object['Main Responsibilities Of Your Jobs']}
        </p>

        <p>
            Started working in: {object['Started Working At']}
        </p>

        <p>
            To: {object['To']}
        </p>

        </div>


        
    </div>)
}

export default Screen