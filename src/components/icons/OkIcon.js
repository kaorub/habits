import React, { Component } from 'react';
import logo from './ok.png';
import './icons.css';

export default class OkIcon extends Component {
	render() {
		return (
				<img 
					src={logo}
					alt="added" 
					className={this.props.added ? 'right-icon' : 'hidden'}
					id={this.props.id}
				/>
	    )
	}
}
