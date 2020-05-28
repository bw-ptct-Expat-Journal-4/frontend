import React from 'react';
// import './App.css';
import Login from './components/Login';
import Register from './components/Registration';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import UserGallery from './components/UserGallery';
import CreateStory from './components/CreateStory';
import ReadStory from './components/ReadStory';
import { StoriesProvider } from './components/StoriesContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <StoriesProvider>
        <div className="App">
          <Navbar />
          {/* <Gallery /> */}
          <Route exact path="/"><Link to="/login"><button>Login</button></Link></Route>
          <Route exact path="/"><Link to="/register"><button>Register</button></Link></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/register"><Register /></Route>

          {/* <Route path='/create' component={CreateStory}></Route> */}
          {/* <Route path='/read' component={ReadStory}></Route> */}
          {/* <Route path='/gallery' component={Gallery}></Route> */}
          {/* <Route path='/user' component={UserGallery}></Route> */}
          <Route path='/create'><CreateStory /></Route>
          <Route path='/read'><ReadStory /></Route>
          <Route path='/gallery'><Gallery /></Route>
          <Route path='/user'><UserGallery /></Route>
          {/* <CreateStory /> */}
          {/* <ReadStory /> */}
        </div>
      </StoriesProvider>
    </Router>
  );
}

export default App;

// Netlify error
// 1:50:07 PM: ./src/App.js
// 1:50:07 PM: Cannot find file './components/Login' in './src'.