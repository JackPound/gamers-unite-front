import React, { Component } from 'react';

class UserGames extends Component {
	constructor(props){
		super(props);
		this.state = {
			hello: 'world'
		}
	}
	// componentWillMount = () =>{
		
	// }
	render() {
		return(
			<div>
				<h3>{this.props.game}</h3>
				<button>Remove</button>
			</div>
		)
	}
}

export default UserGames;