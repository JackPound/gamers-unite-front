import React, { Component } from 'react';
import Nav from './Nav';
import { Grid } from 'react-bootstrap';

class Header extends Component {
	render() {
		return(
			<Grid className='uheader'>
				<Nav user={this.props.user} updateUser={this.props.updateUser}/>
			</Grid>
		)
	}
}

export default Header;