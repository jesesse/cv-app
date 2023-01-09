import React from 'react';
import './styles/app.css'
import PersonalInfo from './components/PersonalInfo';
import EducationExp from './components/EducationExp';
import PracticalExp from './components/PracticalExp';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInfo: {
        editMode: true,
        firstName: "",
        lastName: "",
        email: "",
      },
      edExps: [
        {
          editMode: true,
          schoolName: "",
          degree: "",
          startDate: "",
          endDate: ""
        }
      ],
      practicalExps: [
        {
          editMode: true,
          companyName: "",
          jobTitle: "",
          startDate: "",
          endDate: ""
        }
      ]
    }

    this.submitPersonalInfoChange = this.submitPersonalInfoChange.bind(this)
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this)
    this.setPersonalInfoEditMode = this.setPersonalInfoEditMode.bind(this)
  }

  setPersonalInfoEditMode(e) {
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

  submitPersonalInfoChange(e) {
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

  handlePersonalInfoChange(e) {

    if(e.target.className === "first-name-input")   this.setState({
      personalInfo: {
        editMode: true,
        firstName: e.target.value,
        lastName: this.state.personalInfo.lastName,
        email: this.state.personalInfo.email
      }
    })
    if(e.target.className === "last-name-input")   this.setState({
      personalInfo: {
        editMode: true,
        firstName: this.state.personalInfo.firstName,
        lastName: e.target.value,
        email: this.state.personalInfo.email
      }
    })
    if(e.target.className === "email-input")   this.setState({
      personalInfo: {
        editMode: true,
        firstName: this.state.personalInfo.firstName,
        lastName: this.state.personalInfo.lastName,
        email:  e.target.value,
      }
    })

  }

  render() {
    return (
      <div className='container'>
        <PersonalInfo
          personalInfo={this.state.personalInfo}
          onSubmit={this.submitPersonalInfoChange}
          onChange={this.handlePersonalInfoChange}
          setEditMode={this.setPersonalInfoEditMode}></PersonalInfo>
        <EducationExp edExps={this.state.edExps}></EducationExp>
        <PracticalExp practicalExps={this.state.practicalExps}></PracticalExp>
      </div>
    )
  }
}

export default App;
