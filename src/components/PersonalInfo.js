import React from "react";
import '../styles/personalInfo.css';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let fName;
        let lName;
        let email;
        let btn;

        console.log(this.props.personalInfo)

        if (this.props.personalInfo.editMode) {
            fName = <input 
            value={this.props.personalInfo.firstName} 
            type="text" 
            className="first-name-input" 
            placeholder="First Name" 
            onChange={(e) => {this.props.onChange(e)}}></input>

            lName = <input 
            value={this.props.personalInfo.lastName} 
            type="text" 
            className="last-name-input" 
            placeholder="Last Name" 
            onChange={(e) => {this.props.onChange(e)}}></input>
            
            email = <input 
            value={this.props.personalInfo.email} 
            type="email" 
            className="email-input" 
            placeholder="example@email.com" 
            onChange={(e) => {this.props.onChange(e)}}></input>
            
            btn = <button onClick={(e) => {this.props.onSubmit(e)}}>Submit</button>
        }
        if (!this.props.personalInfo.editMode) {
            fName = <div type="text" className="first-name-input" placeholder="First Name">First Name: {this.props.personalInfo.firstName}</div>
            lName = <div type="text" className="first-name-input" placeholder="Last Name">Last Name: {this.props.personalInfo.lastName}</div>
            email = <div type="email" placeholder="example@email.com">Email: {this.props.personalInfo.email}</div>
            btn = <button onClick={(e) => {this.props.setEditMode(e)}}>Edit</button>
        }

        return (
            <form className="personal-info">
                <h1>PERSONAL INFO</h1>
                {fName}
                {lName}
                {email}
                {/* find a phone number component */}
                {btn}
            </form>
        )
    }
}

export default PersonalInfo;