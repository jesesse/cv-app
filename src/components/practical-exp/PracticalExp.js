import React from "react";
import PracticalExpForm from './PracticalExpForm';
import PracticalExpsDisplay from './PracticalExpsDisplay';
import '../../styles/practicalExp.css';

class PracticalExp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formDisplay: false,
            practicalExps: [],
            practicalExp: {
                companyName: "",
                jobTitle: "",
                tasks: "",
                startDate: "",
                endDate: "",
                key: new Date().getTime()
            }
        }

        this.submitExp = this.submitExp.bind(this)
        this.deleteExp = this.deleteExp.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentWillMount() {
        this.displayForm = this.displayForm.bind(this)
    }

    displayForm() {
        this.setState({
            formDisplay: (!this.state.formDisplay)
        })
    }

    onChange(e) {
        let target;
        switch (e.target.className) {
            case "company-name": target = "companyName"; break;
            case "job-title": target = "jobTitle"; break;
            case "tasks": target = "tasks"; break;
            case "start-date": target = "startDate"; break;
            case "end-date": target = "endDate"; break;
            default: alert("error");
        }

        let newExp = this.state.practicalExp;
        newExp[target] = e.target.value;

        this.setState({
            practicalExp: newExp
        })
    }

    submitExp(e) {
        e.preventDefault()
        this.setState({
            formDisplay: false,
            practicalExps: this.state.practicalExps.concat(this.state.practicalExp),
            practicalExp: {
                companyName: "",
                jobTitle: "",
                tasks: "",
                startDate: "",
                endDate: "",
                key: new Date().getTime()
            }
        })
    }

    deleteExp(key) {
        let newExps = this.state.practicalExps.filter(item => item.key != key)
        this.setState({
            practicalExps: newExps
        })
    }

    render() {
        return (
            <div className="practical-exp-container">
                <h1>PRACTICAL EXPERIENCES</h1>
                <PracticalExpsDisplay
                    exps={this.state.practicalExps}
                    deleteExp={this.deleteExp}>
                </PracticalExpsDisplay>
                <PracticalExpForm
                    onChange={this.onChange}
                    submitExp={this.submitExp}
                    display={this.state.formDisplay}>
                </PracticalExpForm>
                <button onClick={this.displayForm}>+ Add</button>
            </div>
        )
    }
}

export default PracticalExp;