import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './styles/App.css';

function App() {

  return (
    <>
    <Router>
    <div className="App">
        <div className="Menu">
          <ul>
            <li>
              <Link className="linkHome" to="/">Home</Link>
            </li>
            <li>
              <Link className="linkHome" to="/about">About</Link>
            </li><li>
              <Link className="linkHome" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </div>    
    </Router>
    </>
  );
}


export default App;
