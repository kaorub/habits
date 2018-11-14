import React, { Component } from 'react';
import './Division.css';

class Division extends Component {

	render() {
		return (
			<div>
				{this.props.text}
				<span className="division"></span>
			</div>
    	)
	}
}

export default Division;
