function Screen({object}){
    return (
    <div className="screen">
        <div className="personal-info">
        <h3>
            Personal Info
        </h3>
        <h4>
        Full Name: {object['Name']}            
        </h4>
        <h4>
        Email: {object['Email']}
        </h4>
        <h4>
        Phone: {object['Phone Numbers']}
        </h4>
        </div>

        <div className="eduaction-info">
        <h3>
        Eduaction Info
        </h3>
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
        <h3>
        Company Info
        </h3>
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