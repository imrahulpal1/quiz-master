import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/quiz" component={Quiz} />
                    <Route path="/results" component={Results} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
