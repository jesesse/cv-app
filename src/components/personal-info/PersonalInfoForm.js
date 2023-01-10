import React from "react";

class PersonalInfoForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form>
                <input
                    value={this.props.personalInfo.firstName}
                    type="text"
                    className="first-name-input"
                    placeholder="First Name"
                    onChange={(e) => { this.props.onChange(e) }}></input>
                <input
                    value={this.props.personalInfo.lastName}
                    type="text"
                    className="last-name-input"
                    placeholder="Last Name"
                    onChange={(e) => { this.props.onChange(e) }}></input>

                <input
                    value={this.props.personalInfo.email}
                    type="email"
                    className="email-input"
                    placeholder="example@email.com"
                    onChange={(e) => { this.props.onChange(e) }}></input>

                <button onClick={(e) => { this.props.onSubmit(e) }}>Submit</button>
            </form>
        )
    }
}

export default PersonalInfoForm;