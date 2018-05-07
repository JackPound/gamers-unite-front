import React, { Component } from 'react';
import Nav from './Nav';
import Personalize from './Personalization';

class Header extends Component {
	render() {
		return(
			<div>
				<h1>this Is HEADER component</h1>
				<Nav />
				<Personalize />
			</div>
		)
	}
}

export default Header;