import React, { Component } from 'react';
import axios from 'axios';
import GameResults from './GameResults';
class GameSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: []
		}
	}
	findNames = (games) => {
		let nameArr = []
		games.forEach(function(game) {
			console.log(game)
		})
		return games.length
	}
	handleSubmit = (e) => {
		e.preventDefault();
		axios.get('http://localhost:3000/api/v1/games/')
		.then(result => {
			console.log('success', result);
			this.setState({display: result.data})
		})
		.catch(err => {
			console.log('error', err.response.data)
		})
	}
	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="submit" />
				</form>
				<ul>
					 
				</ul>
			</div>
		)
	}
}

export default GameSearch;
