import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		axios.post('/auth/signup', this.state).then(result => {
			localStorage.setItem('gamerToken', result.data)
			this.props.updateUser()
		}).catch(err => {
			console.log('error:', err.response.data);
		});
	}
	handleUsernameChange = (e) => { this.setState({username: e.target.value}); }
	handleEmailChange = (e) => { this.setState({email: e.target.value}); }
	handlePasswordChange = (e) => { this.setState({password: e.target.value}); }

	render() {
		return(
			<div>
				<h2>dis my app SIGNUP component YO</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input type='text' name='Username' placeholder='username' value={this.state.username} onChange={this.handleNameChange} />
					</div>
					<div>
						<input type='text' name='Email' placeholder='email' value={this.state.email} onChange={this.handleEmailChange} />
					</div>
					<div>
						<input type='password' name='Password' placeholder='password' value={this.state.password} onChange={this.handlePasswordChange} />
					</div>
					<div>
						<input type='submit' value='Sign Up!' />
					</div>
				</form>
			</div>
		)
	}
}

export default Signup;