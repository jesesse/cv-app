import React from "react";
import EducationExpForm from "./EducationExpForm";
import EducationalExpsDisplay from "./EducationExpsDisplay";
import '../styles/educationExp.css';

class EducationExp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editMode: true,
            edExps: [],
            edExp: {
                schoolName: "",
                degree: "",
                startDate: "",
                endDate: "",
                key: new Date().getTime()
            }
        }

        this.submitEdExp = this.submitEdExp.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.deleteExp = this.deleteExp.bind(this)
        
    }

    handleChange(e) {
        if (e.target.className === "school-name") this.setState({
            edExp: {
                schoolName: e.target.value,
                degree: this.state.edExp.degree,
                startDate: this.state.edExp.startDate,
                endDate: this.state.edExp.endDate,
                key: this.state.edExp.key
            }
        })
        if (e.target.className === "degree") this.setState({
            edExp: {
                schoolName: this.state.edExp.schoolName,
                degree: e.target.value,
                startDate: this.state.edExp.startDate,
                endDate: this.state.edExp.endDate,
                key: this.state.edExp.key
            }
        })
        if (e.target.className === "start-date") this.setState({
            edExp: {
                schoolName: this.state.edExp.schoolName,
                degree: this.state.edExp.degree,
                startDate: e.target.value,
                endDate: this.state.edExp.endDate,
                key: this.state.edExp.key
            }
        })
        if (e.target.className === "end-date") this.setState({
            edExp: {
                schoolName: this.state.edExp.schoolName,
                degree: this.state.edExp.degree,
                startDate: this.state.edExp.startDate,
                endDate: e.target.value,
                key: this.state.edExp.key
            }
        })


    }

    submitEdExp(e) {
        e.preventDefault();
        this.setState({
            edExps: this.state.edExps.concat(this.state.edExp),
            edExp: {
                schoolName: "",
                degree: "",
                startDate: "",
                endDate: "",
                key: new Date().getTime()
            }
        })
    }

    deleteExp(key) {
        let newExps = this.state.edExps.filter(exp => exp.key != key)
        this.setState({
            edExps: newExps,
            edExp: {
                schoolName: "",
                degree: "",
                startDate: "",
                endDate: "",
                key: new Date().getTime()
            }
        })
    }

    render() {

        return (
            <div className="ecudational-exp-container">
                <h1>EDUCATIONAL EXPERIENCE</h1>
                <EducationalExpsDisplay edExps={this.state.edExps} deleteExp={this.deleteExp}></EducationalExpsDisplay>
                <EducationExpForm edExp={this.state.edExp} submitEdExp={this.submitEdExp} handleChange={this.handleChange}></EducationExpForm>
            </div>
        )
    }
}

export default EducationExp;