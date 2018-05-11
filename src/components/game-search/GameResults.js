import React, { Component } from 'react';
import axios from 'axios';

class GameResults extends Component {
	constructor(props) {
		super(props);
	}
	getGame = () =>{
		axios.get('http://localhost:3000/api/v1/games/'+this.props.data._id)
		.then(result =>{
			console.log(result)
		})
	}
	render() {
		return(
			<div>
				<a onClick={this.getGame}>{this.props.data.name}</a>
				<div>{this.props.data.platform}</div>

			</div>
		)
	}
}

export default GameResults;