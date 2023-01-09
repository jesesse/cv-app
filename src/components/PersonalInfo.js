import React from "react";
import '../styles/personalInfo.css';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form className="personal-info">
                <h1>PERSONAL INFO</h1>
                <input type="text" className="first-name-input" placeholder="First Name"></input>
                <input type="text" className="last-name-input" placeholder="Last Name"></input>
                <input type="email" placeholder="example@email.com"></input>
                {/* find a phone number component */}
                <button>Submit</button>
            </form>
        )
    }
}

export default PersonalInfo;