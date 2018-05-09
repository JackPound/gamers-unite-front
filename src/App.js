import React, { Component } from 'react';
import { browserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main'

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
		var token = localStorage.getItem('mernToken')
		if(token){
			axios.post('/auth/me/from/token', {
				headers: { 'Authorization': `Bearer ${token}`}
			}).then(response => {
				this.setState({user: response.data.user})
			}).catch(err => {
				localStorage.removeItem('mernToken');
				this.setState({user: null})
			});
		} else {
			localStorage.removeItem('mernToken');
			this.setState({user: null})
		}
	}
	render() {
	    return (
			<div className="App">
				<Header />
				<Main />
				<Footer />
			</div>
	    );
	}
}

export default App;
