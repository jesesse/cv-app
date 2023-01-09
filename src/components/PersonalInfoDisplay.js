import React from "react";

class PersonalInfoDisplay extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="personal-info-display">
                <div type="text" className="first-name-input" placeholder="First Name">First Name: {this.props.personalInfo.firstName}</div>
                <div type="text" className="first-name-input" placeholder="Last Name">Last Name: {this.props.personalInfo.lastName}</div>
                <div type="email" placeholder="example@email.com">Email: {this.props.personalInfo.email}</div>
                <button onClick={(e) => { this.props.setEditMode(e) }}>Edit</button>
            </div>
        )
    }
}

export default PersonalInfoDisplay;