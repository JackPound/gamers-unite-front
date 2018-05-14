import React, { Component } from 'react';
import axios from 'axios';
import GameResults from './GameResults';

class GameSearch extends Component {
	constructor(props) {
		super(props);
		// this.returnUser = this.returnUser.bind(this);
		this.state = {
			display: [],
		}
	}
	// isUser = (which) =>{
	// 	if(this.props.user){
	// 		console.log(this.props.user)
	// 		this.setState({user: this.props.user})
	// 	}
	// }
	// componentWillMount = () =>{
	// 	this.isUser()
	// }
	componentWillMount = () =>{
		axios.get('http://localhost:3000/api/v1/games')
		.then(result =>{
			this.setState(
				{display: result.data}
			)
		})
	}
	// returnUser = () => {
	// 	return this.props.user
	// }
	// ifUser = () => {
	// 	console.log('props:',this.props.user)
	// }

	render() {
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
