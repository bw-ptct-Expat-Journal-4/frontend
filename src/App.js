import React from 'react';
// import './App.css';
import Login from './components/Login';
import Register from './components/Registration';
import Navbar from './components/Navbar';
import CreateStory from './components/CreateStory';
import ReadStory from './components/ReadStory';
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
        <Navbar />
        <Route exact path="/"><Link to="/login"><button>Login</button></Link></Route>
        <Route exact path="/"><Link to="/register"><button>Register</button></Link></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route path='/create' component={CreateStory}></Route>
        <Route path='/read' component={ReadStory}></Route>
        {/* <CreateStory /> */}
        {/* <ReadStory /> */}
      </div>
    </Router>
  );
}

export default App;
