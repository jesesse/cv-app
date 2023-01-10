import React from "react";

class PracticalExpForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let displayForm = (this.props.display) ? "flex" : "none";

        return(
            <form style={{display: displayForm}} className="practical-exp">
                <input className="company-name" value={this.props.name} onChange={(e) => this.props.onChange(e)} placeholder="Company Name"></input>
                <input className="job-title" value={this.props.position} onChange={(e) => this.props.onChange(e)} placeholder="Position Title"></input>
                <input className="tasks" value={this.props.tasks} onChange={(e) => this.props.onChange(e)} placeholder="Main Tasks"></input>
                <div className="dates">
                    <label className="start-date" htmlFor="job-start-date">Starting Date:
                        <input type="date" id="job-start-date" onChange={(e) => this.props.onChange(e)}></input>
                    </label>
                    <label htmlFor="job-end-date">End Date:
                        <input className="end-date" type="date" id="job-end-date" onChange={(e) => this.props.onChange(e)}></input>
                    </label>
                </div>
                <button onClick={(e) => this.props.submitExp(e)}>Submit</button>
            </form>
        )
    }
}

export default PracticalExpForm;