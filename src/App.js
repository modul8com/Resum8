import React from 'react';
import Profile from './components/Profile';
import './App.css';
import moment from 'moment';

function HowManyYearsSinceWorkStart() {
  let workStartDate = new moment([1995, 10, 5, 9, 0, 0]);
  let now = new moment();
  let yearsOfExperience = now.diff(workStartDate, 'years');
  return yearsOfExperience;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Michael Bruyninckx</h1>
        <h3>Your web (application) developper since 1995</h3>
        <h6>{HowManyYearsSinceWorkStart()} years of web experiences</h6>
      </header>
      <nav>
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <h2>
              <a href="#profile">Profile</a>
            </h2>  
          </div>
          <div className="col-xs-12 col-sm-3">
            <h2>
              <a href="#experiences">Experiences</a> {" "}
            </h2>  
          </div>
          <div className="col-xs-12 col-sm-3">
            <h2>
              <a href="#skills">Skills</a> {" "}
            </h2>  
          </div>
          <div className="col-xs-12 col-sm-3">
            <h2>
              <a href="#contact">Contact</a>
            </h2>  
          </div>
        </div>
      </nav>
      <Profile></Profile>
    </div>
  );
}

export default App;
