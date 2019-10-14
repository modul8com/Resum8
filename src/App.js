import React from 'react';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Michael Bruyninckx</h1>
        <h3>Your web developper since 1995</h3>
      </header>
      <nav>
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <h2>
              <a href="#profile">Profile</a>
            </h2>  
          </div>
          <div className="col-sm-3 col-xs-12">
            <h2>
              <a href="#experiences">Experiences</a> {" "}
            </h2>  
          </div>
          <div className="col-sm-3 col-xs-12">
            <h2>
              <a href="#skills">Skills</a> {" "}
            </h2>  
          </div>
          <div className="col-sm-3 col-xs-12">
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
