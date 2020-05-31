import React from 'react';
import './App.css';
import Login from './component/Login';
import Register from './component/Registration';
import Navbar from './component/Navbar';
import Gallery from './component/Gallery';
import UserGallery from './component/UserGallery';
import CreateStory from './component/CreateStory';
import ReadStory from './component/ReadStory';
import PrivateRoute from './component/PrivateRoute';
import { StoriesProvider } from './component/StoriesContext';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <StoriesProvider>
        <div className="App">
          <Navbar />
          <div className='login-button-container'>
            <Route exact path="/"><Link to="/login"><button>Login</button></Link></Route>
            <Route exact path="/"><Link to="/register"><button>Register</button></Link></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><Register /></Route>
          </div>

          <Route exact path='/'>
            <div className='boilerplate'>The more we travel, the richer our lives become. See the world with new eyes and share your memories with loved ones, or the whole world.</div>
            <div className='boilerplate'>Login or register a new account and get started!</div>
          </Route>

          <PrivateRoute path='/create'><CreateStory /></PrivateRoute>
          <Route path='/read/:name/:story'><ReadStory /></Route>
          <Route path='/gallery'><Gallery /></Route>
          <Route path='/user/:name'><UserGallery /></Route>
        </div>
      </StoriesProvider>
    </Router>
  );
}

export default App;