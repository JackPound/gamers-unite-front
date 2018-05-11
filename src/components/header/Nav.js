import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
class Nav extends Component {
	render() {
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
				<Col md={1} className='headCol'>
					<p>hello username here</p>
				</Col>
			</Row>	
		)
	}
}

export default Nav;