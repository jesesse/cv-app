import React from 'react';
import './styles/app.css'
import PersonalInfo from './components/personal-info/PersonalInfo';
import EducationExp from './components/education/EducationExp';
import PracticalExp from './components/practical-exp/PracticalExp';

class App extends React.Component {
  constructor(props) {
    super(props)   
  }

  render() {
    return (
      <div className='container'>
        <PersonalInfo></PersonalInfo>
        <EducationExp></EducationExp>
        <PracticalExp></PracticalExp>
      </div>
    )
  }
}

export default App;
