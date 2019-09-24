import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from './Header';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
      <Router>
        <Header/>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </Router>
      //Body
      //Footer
  );
}

export default App;
