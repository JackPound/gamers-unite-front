import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<div>
				<footer className='footer'>GITLINKHERE Jack Pound &copy; 2018-{new Date().getFullYear()}</footer>
			</div>
		)
	}
}

export default Footer;