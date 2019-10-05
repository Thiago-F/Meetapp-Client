import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/cadastrar" exact component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}
