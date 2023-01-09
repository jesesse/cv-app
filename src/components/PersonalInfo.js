import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import PersonalInfoDisplay from "./PersonalInfoDisplay";
import '../styles/personalInfo.css';


class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            personalInfo: {
                editMode: true,
                firstName: "",
                lastName: "",
                email: "",
            }
        }
        this.submitChange = this.submitChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setEditMode = this.setEditMode.bind(this)
    }

    setEditMode(e) {
        e.preventDefault();
        this.setState({
            personalInfo: {
                editMode: true,
                firstName: this.state.personalInfo.firstName,
                lastName: this.state.personalInfo.lastName,
                email: this.state.personalInfo.email
            }
        })
    }

    submitChange(e) {
        e.preventDefault();
        this.setState({
            personalInfo: {
                editMode: false,
                firstName: this.state.personalInfo.firstName,
                lastName: this.state.personalInfo.lastName,
                email: this.state.personalInfo.email
            }
        })
    }

    handleChange(e) {

        if (e.target.className === "first-name-input") this.setState({
            personalInfo: {
                editMode: true,
                firstName: e.target.value,
                lastName: this.state.personalInfo.lastName,
                email: this.state.personalInfo.email
            }
        })
        if (e.target.className === "last-name-input") this.setState({
            personalInfo: {
                editMode: true,
                firstName: this.state.personalInfo.firstName,
                lastName: e.target.value,
                email: this.state.personalInfo.email
            }
        })
        if (e.target.className === "email-input") this.setState({
            personalInfo: {
                editMode: true,
                firstName: this.state.personalInfo.firstName,
                lastName: this.state.personalInfo.lastName,
                email: e.target.value,
            }
        })

    }

    render() {
        let personalInfoView;
        if (this.state.personalInfo.editMode) {
            personalInfoView = (
                <PersonalInfoForm personalInfo={this.state.personalInfo}
                    onSubmit={this.submitChange}
                    onChange={this.handleChange}>
                </PersonalInfoForm>
            )
        }
        if (!this.state.personalInfo.editMode) {
            personalInfoView = (
                <PersonalInfoDisplay
                    personalInfo={this.state.personalInfo}
                    setEditMode={this.setEditMode}>
                </PersonalInfoDisplay>
            )
        }
        return (
            <div className="personal-info-container">
                <h1>PERSONAL INFO</h1>
                {personalInfoView}
            </div>
        )
    }
}

export default PersonalInfo;