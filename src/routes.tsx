import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Billing from './pages/Billing';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/billing" component={Billing} />
            </Switch>
        </Router>
    );
};

export default Routes;