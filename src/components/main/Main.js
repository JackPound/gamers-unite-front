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
				<Route exact path='/games' render={(props) => <GameSearch user={this.props.user} updateUser={this.props.updateUser} {...props} />} />
				<Route exact path='/profile' render={(props) => <Profile user={this.props.user} updateUser={this.props.updateUser} />} />
				<Route exact path='/search' render={(props) => <FindFriends user={this.props.user} updateUser={this.props.updateUser} {...props} />} />
				<Route exact path='/login' render={(props) => <Login user={this.props.user} updateUser={this.props.updateUser} {...props} />} />
				<Route exact path='/signup' render={(props) => <Signup user={this.props.user} updateUser={this.props.updateUser} {...props} />} />
			</Switch>
		)
	}
}

export default Main;