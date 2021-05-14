import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginPage } from '../components/login/LoginPage';
import { DashboarRoutes } from './DashboarRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter =()=>{

    const { user } = useContext(AuthContext);

    return(
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={ LoginPage } />
                        <PrivateRoute path="/" component={ DashboarRoutes } isAuthenticated={user.logged} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}