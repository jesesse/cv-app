import React from "react";
import '../styles/educationExp.css';

class EducationExp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form className="education-exp">
                <h1>EDUCATIONAL EXPERIENCE</h1>
                <input placeholder="School name"></input>
                <input placeholder="Degree"></input>
                <div className="dates">
                    <label htmlFor="school-start-date">Starting Date:
                        <input type="date" id="school-start-date"></input>
                    </label>
                    <label htmlFor="school-end-date">End Date:
                        <input type="date" id="school-end-date"></input>
                    </label>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default EducationExp;