import React, { Component } from 'react'
import axios from 'axios';

class Nav extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		axios.get('http://localhost:3000/api/v1/games/')
		.then(result => {
			console.log('success', result);
		})
		.catch(err => {
			console.log('error', err.response.data)
		})
	}
	render() {
		return(
			<div>
				<h1>this is NAV component</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default Nav;