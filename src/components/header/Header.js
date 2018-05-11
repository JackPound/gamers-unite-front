import React, { Component } from 'react';
import Nav from './Nav';
import Personalize from './Personalization';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {
	render() {
		return(
			<Grid className='uheader'>
				<Nav />
			</Grid>
		)
	}
}

export default Header;