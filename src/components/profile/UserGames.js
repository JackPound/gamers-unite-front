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
			<div className='games'>
				<p>{this.props.game}</p>
				<button>Remove</button>
			</div>
		)
	}
}

export default UserGames;