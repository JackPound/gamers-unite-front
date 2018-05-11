import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3000/auth/login', this.state).then(result => {
			localStorage.setItem('gamerToken', result.data.token)
			this.props.updateUser();
		}).catch(err => {
			console.log('error:', err);
		});
	}
	handleEmailChange = (e) => {
		this.setState({email: e.target.value});
	}
	handlePasswordChange = (e) => {
		this.setState({password: e.target.value});
	}
	render() {
		// PROJTODO REDIRECT / RESTRICT IF LOGGED IN ALREADY
		return(
			<div>
				<h1> dis my app LOGIN component </h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input type='text' name='Email' placeholder='email' value={this.state.email} onChange={this.handleEmailChange} />
					</div>
					<div>
						<input type='password' name='Password' placeholer='password' value={this.state.password} onChange={this.handlePasswordChange} />
					</div>
					<div>
						<input type='submit' value='Login' />
					</div>
				</form>
			</div>
		)
	}
}

export default Login;