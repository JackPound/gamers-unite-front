import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import GameSearch from '../game-search/GameSearch';
import Profile from '../profile/Profile';
import FindFriends from '../find-friends/FindFriends';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import { BrowserRouter as Router } from 'react-router-dom'

class Main extends Component {
	constructor(props){
		super(props)
	}
	
	render() {
		return(
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route path='/games' component={
					() => (<GameSearch user={this.props.user} updateUser={this.props.updateUser} />)
				} />
				<Route path='/profile' component={
					() => (<Profile user={this.props.user} updateUser={this.props.updateUser} />)
				} />
				<Route path='/search' component={
					() => (<FindFriends user={this.props.user} updateUser={this.props.updateUser} />)
				} />
				<Route path='/login' component={
					() => (<Login user={this.props.user} updateUser={this.props.updateUser} />)
				} />
				<Route path='/signup' component={
					() => (<Signup user={this.props.user} updateUser={this.props.updateUser} />)
				} />
			</Switch>
		)
	}
}

export default Main;
				// <Route path='/games' component={
				// 	() => (<GameSearch user={this.props.user} updateUser={this.props.updateUser} />)
				// } />