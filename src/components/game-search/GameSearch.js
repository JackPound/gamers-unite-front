import React, { Component } from 'react';
import axios from 'axios';
import GameResults from './GameResults';

class GameSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: [],
		}

	}
	componentWillMount = () =>{
		axios.get('http://localhost:3000/api/v1/games')
		.then(result =>{
			this.setState({display: result.data})
		})
	}

	render() {
		if(!this.props.user) {
			return <div>Loading...</div>
		}
		return (
			<div>
			{this.state.display.map(function(object){
				return (
					<GameResults key={object._id} data={object} />
				)
			})}
			</div>
		)
	}
}

export default GameSearch;
