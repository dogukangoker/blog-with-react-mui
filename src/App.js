import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import About from './pages/About'
import Project from './pages/Project'
import './styles/App.css';

function App() {

    return ( 
    <> <Router>
        <div className="App">
            <div className="Menu">
                <ul>
                    <li>
                        <Link className="linkHome" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="linkHome" to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path="/" exact component={About}/>
                <Route path="/projects">
                    <Project/>
                </Route>
            </Switch>
        </div>
    </Router> 
    </>
  );
}


export default App;