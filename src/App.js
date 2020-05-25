import React from 'react';
// import './App.css';
import Login from './components/Login';
import Register from './components/Registration';
import CreateStory from './components/CreateStory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/"><Link to="/login"><button>Login</button></Link></Route>
        <Route exact path="/"><Link to="/register"><button>Register</button></Link></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <CreateStory />
      </div>
    </Router>
  );
}

export default App;
