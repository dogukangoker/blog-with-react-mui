import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import About from './pages/About'
import Project from './pages/Project'
import MenuIcon from '@mui/icons-material/Menu';
import './styles/App.css';

function App() {

    return ( <> <Router>
        <div className="App">
            <div className="Menu">
                <ul>
                    <li>
                        <MenuIcon className="linkHome" />
                    </li>
                    <li>
                        <Link className="linkHome" to="/">Anasayfa</Link>
                    </li>
                    <li>
                        <Link className="linkHome" to="/projects">Projeler ve Deneyim</Link>
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
    </Router> </>
  );
}


export default App;