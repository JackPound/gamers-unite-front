import React, { Component } from 'react';

class FindFriendsForm extends Component {

	render() {
		if(!this.props.data) {
			return <div>Loading...</div>
		}
		return(
			<option value={this.props.data}>{this.props.data}</option>
		)
	}
}

export default FindFriendsForm;