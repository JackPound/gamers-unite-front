import './App.css';
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Main from './components/main/Main';
import React, { Component } from 'react';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: null
		}
	}
	componentDidMount = () => {
		this.getUser();
	}
	// Checking if there is a token in local storage / set user based on token
	getUser = () => {
		var token = localStorage.getItem('gamerToken')
		if(token){
			axios.post('http://localhost:3000/auth/me/from/token', {
				headers: { 'Authorization': `Bearer ${token}`}
			}).then(response => {
				this.setState({user: response.data.user})
			}).catch(err => {
				localStorage.removeItem('gamerToken');
				this.setState({user: null})
			});
		} else {
			localStorage.removeItem('gamerToken');
			this.setState({user: null})
		}
	}
	render() {
	    return (
			<div className="App">
	    	{console.log('APP.JS:',this.state.user)}
				<Header user={this.state.user} updateUser={this.getUser} />
				<Main user={this.state.user} updateUser={this.getUser} />
				<Footer />
			</div>
	    );
	}
}

export default App;
