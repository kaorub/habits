import React, { Component } from 'react';
import AddIcon from './icons/AddIcon';
import WarningIcon from './icons/WarningIcon';
import OkIcon from './icons/OkIcon';
import './HabitItem/HabitItem.css';

export default class FriendHabitItem extends Component {
	constructor(props) {
		super(props);
		this.state = { added: false, isHovered: false };
	};

	handleMouseEnter() {
		this.setState({ isHovered: true });
	}

	handleMouseLeave() {
		this.setState({ isHovered: false });
	}

	render() {
		const { id, name } = this.props.habit;
		return (
				<li
		          	key={id}
		          	className='list-item'
		          	onMouseEnter={this.handleMouseEnter.bind(this)}
		          	onMouseLeave={this.handleMouseLeave.bind(this)}>
		          	<AddIcon 
		          		hovered={this.state.isHovered}
						onClick={this.handleClick.bind(this)}
						habitName={name} />
	          		<span>{name}</span>
	          		<WarningIcon warnId={id} />
					<OkIcon
						added={this.state.added}
					/>
          		</li>
	    	
	    )
	}

	handleClick() {
		this.setState({ added: true })
	}
}
