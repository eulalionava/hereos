import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Marvel } from '../components/marvel/Marvel';
import { HeroesPage } from '../components/heroes/HeroesPage';
import { DcPage } from '../components/dc/DcPage';
import { SearchPage } from '../components/search/SearchPage';

export const DashboarRoutes =()=>{
    return(
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ Marvel }/>
                    <Route exact path="/hero/:heroeId" component={ HeroesPage }/>
                    <Route exact path="/dc" component={ DcPage }/>
                    <Route exact path="/search" component={ SearchPage } />
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}