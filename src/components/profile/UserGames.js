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
				<h2>usergames component</h2>
				
			</div>
		)
	}
}

export default UserGames;