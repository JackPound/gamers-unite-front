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
	componentWillMount = () =>{
		axios.get('http://localhost:3000/api/v1/games')
		.then(result =>{
			this.setState(
				{display: result.data}
			)
			console.log('this.state.display', this.state.display)
		})
	}
	render() {
		return (
			this.state.display.map(function(object){
				return (
					<GameResults key={object._id} data={object} />
				)
			})
		)
	}
}

export default GameSearch;
