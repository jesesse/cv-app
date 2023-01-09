import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import PersonalInfoDisplay from "./PersonalInfoDisplay";
import '../styles/personalInfo.css';


class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let personalInfoView;

        if (this.props.personalInfo.editMode) {
            personalInfoView = (
                <PersonalInfoForm personalInfo={this.props.personalInfo}
                    onSubmit={this.props.onSubmit}
                    onChange={this.props.onChange}>
                </PersonalInfoForm>
            )
        }
        if (!this.props.personalInfo.editMode) {
            personalInfoView = (
                <PersonalInfoDisplay
                    personalInfo={this.props.personalInfo}
                    setEditMode={this.props.setEditMode}>
                </PersonalInfoDisplay>
            )

        }

        console.log(personalInfoView)

        return (
            <div className="personal-info-container">
                {personalInfoView}
            </div>
        )
    }
}

export default PersonalInfo;