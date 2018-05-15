import React, { Component } from 'react';
import UserGames from './UserGames';

class Profile extends Component {
	constructor(props){
		super(props)
		this.state ={
			user: this.props.user
		}
	}
	render() {
		if(!this.props.user) {
			return <div>Loading...</div>
		}
		return(
			<div>
				<h1>this is PROFILE componenet</h1>
				{this.props.user.playedGames[0]}
				<UserGames profileUser={this.props.user} updateUser={this.props.updateUser} />
			</div>
		)
	}
}

export default Profile;