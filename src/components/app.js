import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Login from "../routes/login";

const App = () => (
  <div id="app">
    <main>
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Profile path="/profile/" user="me" />
        <Profile path="/profile/:user" />
      </Router>
    </main>
  </div>
);

export default App;
