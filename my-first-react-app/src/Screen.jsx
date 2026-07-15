function Screen({object}){
    return (
    <div className="screen">
        <div className="personal-info">

        <h4>
        {object['Name'] || 'Full Name:'}            
        </h4>
        <h4>
         {object['Email'] || 'Email:'}
        </h4>
        <h4>
         {object['Phone Number'] || 'Phone:' }
        </h4>
        </div>

        <div className="eduaction-info">
        <h4>
        School Name: {object['School Name']}
        </h4>

        <h4>
            Title: {object['Title of Study']}
        </h4>

        <h4>
            Date: {object['Date Of Study']}
        </h4>
        </div>
        
        <div className="company-info">

        <h4>
        Company Name: {object['Company Name']}
        </h4>

        <h4>
            Title: {object['Position Title']}
        </h4>

        <h4>
            Main Responsibilities: {object['Main Responsibilities Of Your Jobs']}
        </h4>

        <h4>
            Started working in: {object['Started Working At']}
        </h4>

        <h4>
            To: {object['To']}
        </h4>

        </div>


        
    </div>)
}

export default Screen