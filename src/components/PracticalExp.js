import React from "react";
import '../styles/practicalExp.css';

class PracticalExp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form className="practical-exp">
                <h1>PRACTICAL EXPERIENCE</h1>
                <input placeholder="Company Name"></input>
                <input placeholder="Position Title"></input>
                <input placeholder="Main Tasks"></input>
                <div className="dates">
                    <label htmlFor="job-start-date">Starting Date:
                        <input type="date" id="job-start-date"></input>
                    </label>
                    <label htmlFor="job-end-date">End Date:
                        <input type="date" id="job-end-date"></input>
                    </label>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default PracticalExp;