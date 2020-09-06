import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/helloworld";
import { Route, Link } from 'react-router-dom';


let test = 1;
function updateTest()
{
  test ++;
}

function App() {
 
  updateTest();
  return (
   
    <div className="App">

      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/helloWorld">Hello World</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {test}
      <Route path="/helloWorld" component={HelloWorld}/>
      {/* <HelloWorld myname="ilya" hisname="danny" settest = {updateTest}/> */}
    </div>
  );
}

export default App;
