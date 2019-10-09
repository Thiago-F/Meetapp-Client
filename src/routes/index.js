import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import Meetup from '~/pages/Meetup';
import New from '~/pages/New';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />

            <Route path="/profile" isPrivate component={Profile} />
            <Route path="/dashboard" isPrivate component={Dashboard} />

            <Route path="/meetup/:id" isPrivate component={Meetup} />
            <Route path="/meetup-edit" isPrivate component={New} />
        </Switch>
    );
}
