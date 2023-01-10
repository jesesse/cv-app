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

    componentWillMount(){
        this.displayForm = this.displayForm.bind(this)
    }

    displayForm(){
        this.setState({
            formDisplay: (!this.state.formDisplay)
        })
    }

    onChange(e){
        if (e.target.className === "company-name") this.setState({
            practicalExp: {
                companyName: e.target.value,
                jobTitle: this.state.practicalExp.jobTitle,
                tasks: this.state.practicalExp.tasks,
                startDate: this.state.practicalExp.startDate,
                endDate: this.state.practicalExp.endDate,
                key: this.state.practicalExp.key
              }
        })
        if (e.target.className === "job-title") this.setState({
            practicalExp: {
                companyName: this.state.practicalExp.companyName,
                jobTitle: e.target.value,
                tasks: this.state.practicalExp.tasks,
                startDate: this.state.practicalExp.startDate,
                endDate: this.state.practicalExp.endDate,
                key: this.state.practicalExp.key
              }
        })
        if (e.target.className === "tasks") this.setState({
            practicalExp: {
                companyName: this.state.practicalExp.companyName,
                jobTitle: this.state.practicalExp.jobTitle,
                tasks: e.target.value,
                startDate: this.state.practicalExp.startDate,
                endDate: this.state.practicalExp.endDate,
                key: this.state.practicalExp.key
              }
        })
        if (e.target.className === "start-date") this.setState({
            practicalExp: {
                companyName: this.state.practicalExp.companyName,
                jobTitle: this.state.practicalExp.jobTitle,
                tasks: this.state.practicalExp.tasks,
                startDate: e.target.value,
                endDate: this.state.practicalExp.endDate,
                key: this.state.practicalExp.key
              }
        })
        if (e.target.className === "end-date") this.setState({
            practicalExp: {
                companyName: this.state.practicalExp.companyName,
                jobTitle: this.state.practicalExp.jobTitle,
                tasks: this.state.practicalExp.tasks,
                startDate: this.state.practicalExp.startDate,
                endDate: e.target.value,
                key: this.state.practicalExp.key
              }
        })
    }

    submitExp(e){
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

    deleteExp(key){
        let newExps = this.state.practicalExps.filter(item => item.key != key)
        this.setState({
            practicalExps: newExps
        })
    }

    render() {
        return (
            <div className="practical-exp-container">
                <h1>PRACTICAL EXPERIENCES</h1>
                <PracticalExpsDisplay exps={this.state.practicalExps} deleteExp={this.deleteExp}></PracticalExpsDisplay>
                <PracticalExpForm onChange={this.onChange} submitExp={this.submitExp} display={this.state.formDisplay}></PracticalExpForm>
                <button onClick={this.displayForm}>+ Add</button>
            </div>
        )
    }
}

export default PracticalExp;