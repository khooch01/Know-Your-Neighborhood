import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/login" component={Login} />
                    <ProtectedRoute path="/dashboard" component={UserInfo} />
                    <Route path="/" component={() => <div>Home Page</div>} />
                </Switch>
            </AuthProvider>
        </Router>
    );
};

export default App;
