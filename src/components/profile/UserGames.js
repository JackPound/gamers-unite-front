import React, { Component } from 'react';

class UserGames extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: this.props.profileUser
		}
	}
	// componentWillMount = () =>{
		
	// }
	render() {
		return(
		<div>
			<p> huh </p>
			<p>{this.state.user.email}</p>
		</div>
		)
		// if (this.props.user.playedGames){
		// 	return(
		// 		<div>
		// 			{this.props.user.playedGames}
		// 		</div>
		// 	)
		// } else {
		// 	return(
		// 		<div>
		// 			Your favorite games will go here!
		// 		</div>
		// 	)
		// }
	}
}

export default UserGames;