import React from 'react';
import './App.css';
import Courses from './Course/Courses.js'
import { BrowserRouter as Router, Switch, Route/*, Link */ } from 'react-router-dom';

function App() {
    
    return <Router>
        <div>
            { /*
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            */ }
            <header>
                <h1><a href="/courses">Nekosia</a></h1>
            </header>
            <Switch>
                <Route path="/courses" component={ Courses } />
                { /* <Route path="/about" component={About}/> */ }
                { /* <Route path="/topics" component={Topics}/> */ }
                <Route path="/" component={ Courses } />
            </Switch>
        </div>
        
    </Router>
}

export default App;
