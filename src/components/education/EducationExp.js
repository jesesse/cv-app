import React from "react";
import EducationExpForm from "./EducationExpForm";
import EducationalExpsDisplay from "./EducationExpsDisplay";
import '../../styles/educationExp.css';

class EducationExp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formDisplay: false,
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
        this.onChange = this.onChange.bind(this)
        this.deleteExp = this.deleteExp.bind(this)
     
    }

    componentWillMount() {
        this.displayForm = this.displayForm.bind(this)
    }
    displayForm(){
        // e.target.style = `display: ${(!this.state.btnDisplay)}`
        this.setState({
            formDisplay: (!this.state.formDisplay)
        })
    }

    onChange(e) {
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
            },
            formDisplay: (!this.state.formDisplay)
        })
    }

    deleteExp(key) {
        let newExps = this.state.edExps.filter(exp => exp.key != key)
        this.setState({
            edExps: newExps
        })
    }

    render() {

        return (
            <div className="ecudational-exp-container">
                <h1>EDUCATIONAL EXPERIENCE</h1>
                <EducationalExpsDisplay edExps={this.state.edExps} deleteExp={this.deleteExp}></EducationalExpsDisplay>
                <EducationExpForm display={this.state.formDisplay} edExp={this.state.edExp} submitEdExp={this.submitEdExp} onChange={this.onChange}></EducationExpForm>
                <button onClick={this.displayForm}>+ Add Edu</button>
            </div>
        )
    }
}

export default EducationExp;