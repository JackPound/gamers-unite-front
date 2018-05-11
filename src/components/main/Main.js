import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import GameSearch from '../game-search/GameSearch';
import Profile from '../profile/Profile';
import FindFriends from '../find-friends/FindFriends';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

class Main extends Component {
	render() {
		return(
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route path='/games' component={GameSearch} />
				<Route path='/profile' component={Profile} />
				<Route path='/search' component={FindFriends} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
			</Switch>
		)
	}
}

export default Main;