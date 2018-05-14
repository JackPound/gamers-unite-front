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
			{console.log('Main.js:',this.props.user)}
				<Route exact path='/' component={Landing} />
				<Route path='/games' component={GameSearch} />
				<Route path='/profile' component={
					() => (<Profile user={this.props.user} updateUser={this.props.updateUser} />)
				} />
				<Route path='/search' component={FindFriends} />
				<Route path='/login' component={
					() => (<Login user={this.props.user} updateUser={this.props.updateUser} />)
				} />
				<Route path='/signup' component={Signup} />
				<Route path='/profile' component={Profile} />
			</Switch>
		)
	}
}

export default Main;