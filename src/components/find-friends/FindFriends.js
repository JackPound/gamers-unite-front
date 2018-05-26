import React, { Component } from 'react';
import axios from 'axios';
import FindFriendsForm from './FindFriendsForm';
import FindFriendsResult from './FindFriendsResult';

class FindFriends extends Component {
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			display: [],
			selected: '5af9d516ef975074549a1902',
			player: 'none',
			hello: 'world',
		}
	}
	componentWillMount =  () =>{
		console.log('WillMount:',this.props.user)
	}
	componentDidMount = () =>{
		console.log('DidMount:',this.props.user)
	}
	myGames = () =>{
		axios.get('http://localhost:3000/users/'+this.props.user.id+'/games')
		.then(result =>{
			console.log('findPlayers result:',result.data)
			this.setState({display: result.data})
		})
	}
	showPlayers = (e) =>{
		e.preventDefault();
		axios.get('http://localhost:3000/api/v1/games/'+this.state.selected+'/users')
		.then(results =>{
			console.log('showPlayrs result',results.data)
			this.setState({player: results.data})
		})
	}
	handleChange = (e) =>{
		console.log(e)
		console.log(this)
	}
	render() {
		if(!this.props.user || !this.state.display) {
			return <div>Loading...</div>
		}
		return(
			<div>
				<h3>Search for players of your favorite games</h3>
				<a onClick={this.myGames}>Show my games</a>
				<hr />
				<form onChange={this.handleChange} onSubmit={this.showPlayers}>
					<select>
						{this.state.display.map(function(object){
							return (
								<FindFriendsForm key={object} data={object} />
							)
						})}
					</select>
					<input type='submit' value='Search Players'/>
				</form>
				<FindFriendsResult player={this.state.player}/>
			</div>
		)
	}
}

export default FindFriends;