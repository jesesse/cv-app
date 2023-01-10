import React from "react";

class EducationalExpsDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="ed-exps-display">
                {this.props.edExps.map(item => {
                    return (
                        <div className="education-exp" key={item.key}>
                            <div>School Name: {item.schoolName}</div>
                            <div>Degree: {item.degree}</div>
                            <div>Start Date: {item.startDate}</div>
                            <div>End Date: {item.endDate}</div>
                            <button onClick={() => {this.props.deleteExp(item.key)}}>Delete</button>
                        </div>)
                })}
            </div>
        )
    }
}

export default EducationalExpsDisplay