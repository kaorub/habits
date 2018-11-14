import React, { Component } from 'react';
import logo from './add.gif';
import './AddIcon.css';

export default class AddIcon extends Component {
	render() {
		return (
				<img 
					src={logo}
					alt="add" 
					id={this.props.id}
					className={this.props.hovered ? '' : 'hidden'}
					onClick={this.handleClick.bind(this)}
				/>
				</span>
	    	
	    )
	}

	handleClick(e) {
		console.log(e.target.name);
		this.props.addHabit(e.target.name);
	}
}
