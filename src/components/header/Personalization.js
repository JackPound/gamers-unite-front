import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
class Personalize extends Component {
	render() {
		return(
			<Col xs={6} md={4}>
				
					<Col xs={9} md={6}>
						<Link to='/login'>Login</Link>
					</Col>
					<Col xs={9} md={6}>
						<Link to='/signup'>Signup</Link>
					</Col>
				
			</Col>
		)
	}
}

export default Personalize;