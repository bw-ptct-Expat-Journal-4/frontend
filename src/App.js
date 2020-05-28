import React from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Registration';
import Gallery from './Components/Gallery';
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
        <Route exact path="/"><Link to="/gallery"><button>Gallery</button></Link></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/gallery"><Gallery /></Route>
      </div>
    </Router>
  );
}

export default App;
