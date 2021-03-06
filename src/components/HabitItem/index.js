import React, { Component } from 'react';
import CloseIcon from '../icons/CloseIcon';
import './HabitItem.css';

export default class HabitItem extends Component {
	constructor(props) {
		super(props);
		this.state = { isHovered: false };
	};

	handleMouseEnter() {
		this.setState({ isHovered: true });
	}

	handleMouseLeave() {
		this.setState({ isHovered: false });
	}

	render() {
		return (
				<li
		          	key={this.props.habit.id}
		          	className='list-item'
		          	onMouseEnter={this.handleMouseEnter.bind(this)}
		          	onMouseLeave={this.handleMouseLeave.bind(this)}>
		          	<CloseIcon 
		          		id={this.props.habit.id}
		          		hovered={this.state.isHovered} />
	          		<span>{this.props.habit.name}</span>
          		</li>
	    	
	    )
	}
}
