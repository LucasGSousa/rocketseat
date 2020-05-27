import React from 'react'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon'
import Registrar from './pages/Registrar'
import Profile from './pages/Profile'
import NovoCaso from './pages/NovoCaso'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/registrar" component={Registrar}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/casos/new" component={NovoCaso}/>
            </Switch>
        </BrowserRouter>
    )
}