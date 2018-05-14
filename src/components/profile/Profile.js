import React, { Component } from 'react';
import UserGames from './UserGames';

class Profile extends Component {

	checkUser = () =>{
		console.log(this.props.user);
	}
	componentWillMount = () =>{
		console.log('Profile.js: componentWillMount', this.props.user)
	}
	componentDidMount = () =>{
		console.log('Profile.js: componentDidMount', this.props.user)
		this.checkUser()
	}
		render() {
			return(
				<div>
					<h1>this is PROFILE componenet</h1>
					<UserGames profileUser={this.props.user} updateUser={this.props.updateUser} />
				</div>
			)
		}
}

export default Profile;