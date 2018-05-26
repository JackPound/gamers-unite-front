import React, { Component } from 'react';

class FindFriendsResult extends Component {
	render() {
		if(this.props.player === 'none'){
			return(<div></div>)
		}
		return(
			<div>
				<h1>{this.props.player.username}'s profile.</h1>
				<hr />
				<p>information about player</p>
				<p>Email:{this.props.player.email}</p>
				<a href='#'>Add friend</a>
				
			</div>
		)
	}
}

export default FindFriendsResult;