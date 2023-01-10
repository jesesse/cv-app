import React from "react";

class EducationExpForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        console.log(this.props.display)
        let formDisplay = (this.props.display) ? "flex" : "none";

        return (
            <form style={{display: formDisplay}} className="education-exp-form">
                <input value={this.props.edExp.schoolName} className="school-name" onChange={(e) => this.props.onChange(e)} placeholder="School name"></input>
                <input value={this.props.edExp.degree} className="degree" onChange={(e) => this.props.onChange(e)} placeholder="Degree"></input>
                <div className="dates">
                    <label htmlFor="school-start-date">Starting Date:
                        <input className="start-date" onChange={(e) => this.props.onChange(e)}type="date" id="school-start-date"></input>
                    </label>
                    <label htmlFor="school-end-date">End Date:
                        <input className="end-date" onChange={(e) => this.props.onChange(e)}type="date" id="school-end-date"></input>
                    </label>
                </div>
                <button onClick={(e) => this.props.submitEdExp(e)}>Submit</button>
            </form>
        )
    }
}

export default EducationExpForm;