import React, { Component } from 'react';
import UserGames from './UserGames';
import axios from 'axios';

class Profile extends Component {
	constructor(props){
		super(props)
		this.state ={
			user: this.props.user,
			display: []
		}
	}
	componentDidMount = () =>{
		axios.get('http://localhost:3000/users/'+this.props.user.id+'/games')
		.then(result =>{
			console.log(result)
			this.setState({display: result.data})
		})
	}
	render() {
		if(!this.props.user) {
			return <div>Loading...</div>
		}
		return(
			<div>
				<h1>My Played Games</h1>
				{this.state.display.map(function(game){
					return(
						<UserGames key={game} game={game}/>
					)
				})}
			</div>
		)
	}
}

export default Profile;