import React from 'react';
import './styles/app.css'
import PersonalInfo from './components/PersonalInfo';
import EducationExp from './components/EducationExp';
import PracticalExp from './components/PracticalExp';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='container'>
        <PersonalInfo></PersonalInfo>
        <EducationExp></EducationExp>
        <PracticalExp></PracticalExp>
      </div>
    )
  }
}

export default App;
