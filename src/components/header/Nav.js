import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class Nav extends Component {
	hello = () => {
		if(this.props.user) {
			return this.props.user.username
		} else {
			return <p>please log in</p>
		}
	}
	handleLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem('gamerToken');
		this.props.updateUser();
	}
	render() {
		if(!this.props.user)
			return(
				<Row className='show-grid'>
					<Col md={1} className='headCol'>
						<Link to='/'>Home</Link>
					</Col>
					<Col md={1} className='headCol'>
						<Link to='/games'>Games</Link>
					</Col>
					<Col md={1} className='headCol'>
						<Link to='/search'>Find Gamers!</Link>
					</Col>
					<Col md={1} className='headCol'>
						<Link to='/login'>Login</Link>
					</Col>
					<Col md={1} className='headCol'>
						<Link to='/signup'>Signup</Link>
					</Col>
				</Row>
			)
		if(this.props.user)
			return(
				<Row className='show-grid'>
					<Col md={1} className='headCol'>
						<Link to='/'>Home</Link>
					</Col>
					<Col md={1} className='headCol'>
						<Link to='/games'>Games</Link>
					</Col>
					<Col md={1} className='headCol'>
						<Link to='/search'>Find Gamers!</Link>
					</Col>
					<Col md={1} className='headCol'>
						<Link to='/profile'>Profile</Link>
					</Col>
					<Col md={1} className='headCol'>
						<a onClick={this.handleLogout}>Logout</a>
					</Col>
					<Col md={1} className='headCol'>
						hello user: {this.hello()}
					</Col>
				</Row>
			)
	}
}

export default Nav;