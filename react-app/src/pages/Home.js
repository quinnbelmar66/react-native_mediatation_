import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import ButtonTemplate from '../components/Button';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Navigates to a page using the defined routes in app.js*/}
        <ButtonTemplate text={'test page'} page='testpage' style={{ backgroundColor: "#4e5e84"}} />
        <ButtonTemplate text={'meditate'} style={{ backgroundColor: "#7180af"}}/>
        <ButtonTemplate text={'meditate'} style={{ backgroundColor: "#3d4961"}}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;