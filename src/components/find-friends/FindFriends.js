import React, { Component } from 'react';
import axios from 'axios';
import FindFriendsForm from './FindFriendsForm';

class FindFriends extends Component {
	constructor(props){
		super(props)
		this.state = {
			display: [],
			player: null
		}
	}
	componentWillMount = () =>{
		
	}
	myGames = () =>{
		console.log('waiting')
			axios.get('http://localhost:3000/users/'+this.props.user.id+'/games')
			.then(result =>{
				console.log('findPlayers result:',result.data)
				this.setState({display: result.data})
			})
	}
	showPlayers = (e) =>{
		e.preventDefault();
		console.log('clicked search players button');
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
				<form onSubmit={this.showPlayers}>
					<select>
						{this.state.display.map(function(object){
							return (
								<FindFriendsForm key={object._id} data={object} />
							)
						})}
					</select>
					<input type='submit' value='Search Players'/>
				</form>
			</div>
		)
	}
}

export default FindFriends;