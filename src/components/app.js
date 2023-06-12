import { h } from "preact";
import { Router } from "preact-router";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Login from "../routes/login";
import Geolocation from "../routes/geolocation";
import Home2 from "../routes/home2";
import Home3 from "../routes/home3";

const App = () => (
  <div id="app">
    <main>
      <Router>
        <Home path="/" />
        <Home2 path="/home2" />
        <Home3 path="/home3" />
        <Login path="/login" />
        <Geolocation path="/geolocation" />
        <Profile path="/profile/" user="me" />
        <Profile path="/profile/:user" />
      </Router>
    </main>
  </div>
);

export default App;
