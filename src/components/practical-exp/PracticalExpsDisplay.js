import React from "react";

class PracticalExpDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="practical-exps-display">
                {this.props.exps.map(exp => {
                    return (
                        <div className="practical-exp" key={exp.key}>
                            <div>Company Name: {exp.name}</div>
                            <div>Job Title: {exp.jobTitle}</div>
                            <div>Main Tasks: {exp.tasks}</div>
                            <div className="dates">
                                <label htmlFor="job-start-date">Starting Date:
                                    <div>{exp.startDate}</div>
                                </label>
                                <label htmlFor="job-end-date">End Date:
                                    <div>{exp.endDate}</div>
                                </label>
                            </div>
                            <button onClick={() => this.props.deleteExp(exp.key)}>Delete</button>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default PracticalExpDisplay;