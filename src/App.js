import React from 'react';
import './styles/app.css'
import PersonalInfo from './components/PersonalInfo';
import EducationExp from './components/EducationExp';
import PracticalExp from './components/PracticalExp';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      practicalExps: [
        {
          editMode: true,
          companyName: "",
          jobTitle: "",
          startDate: "",
          endDate: ""
        }
      ]
    }


    
  }



  render() {
    return (
      <div className='container'>
        <PersonalInfo></PersonalInfo>
        <EducationExp></EducationExp>
        <PracticalExp practicalExps={this.state.practicalExps}></PracticalExp>
      </div>
    )
  }
}

export default App;
