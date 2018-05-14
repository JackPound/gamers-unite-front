import React, { Component } from 'react';
import UserGames from './UserGames';

class Profile extends Component {
	constructor(props){
		super(props)
		this.state ={
			user: this.props.user
		}
	}
	// checkUser = () =>{
	// 	console.log(this.props.user);
	// }
	// componentWillMount = () =>{
	// 	console.log('Profile.js: componentWillMount', this.props.user)
	// }
	// componentDidMount = () =>{
	// 	console.log('Profile.js: componentDidMount', this.props.user)
	// 	this.checkUser()
	// }
		render() {
			return(
				<div>
					<h1>this is PROFILE componenet</h1>
					{this.props.user.username}
					<UserGames profileUser={this.props.user} updateUser={this.props.updateUser} />
				</div>
			)
		}
}

export default Profile;