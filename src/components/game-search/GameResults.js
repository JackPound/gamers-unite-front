import React, { Component } from 'react';
import axios from 'axios';

class GameResults extends Component {
	constructor(props){
		super(props);
		this.state={
			hello: 'world'
		}
	}
	getGame = () =>{
		axios.post('http://localhost:3000/api/v1/games/'+this.props.data._id)
		.then(result =>{
			console.log(result)
		})
		// this.props.updateUser()
	}
	render() {
		return(
			<div className='games'>
				<a onClick={this.getGame}>{this.props.data.name}</a>
				<div>{this.props.data.platform}</div>
			</div>
		)
	}
}

export default GameResults;