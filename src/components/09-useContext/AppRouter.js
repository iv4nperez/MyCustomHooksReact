import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

  
export const AppRouter = () => {
    return (
       <Router>
            <div>
                <NavBar/>
                <div className="container">
                    <Switch>
                        <Route exact={ true } path="/about" component={ AboutScreen } />
                        <Route exact={ true } path="/login" component={ LoginScreen } />
                        <Route exact={ true } path="/"      component={ HomeScreen  } />

                        {/* pagina default */}
                        <Redirect to="/" />
                    </Switch> 
                </div>
            </div>
       </Router>
    )
}
