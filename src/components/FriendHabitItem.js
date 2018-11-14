import React, { Component } from 'react';
import HabitItem from './HabitItem'
import AddIcon from './icons/AddIcon';
import WarningIcon from './icons/WarningIcon';
import OkIcon from './icons/OkIcon';
import { addHabit, deleteHabit, warnHabit } from '../actions';

export default class FriendHabitItem extends HabitItem {
	constructor() {
		super();
	};

	render() {
		return (
				<li
		          	key={this.props.habit.id}
		          	className='list-item'>
		          	<AddIcon 
		          		id={this.props.habit.id}
		          		hovered={this.state.isHovered}
						handleClick={this.handleClick}
		          		addHabit={addHabit} />
	          		{this.props.habit.name}
	          		<WarningIcon
						id={this.props.habit.id}
						warnHabit={warnHabit}
	          			/>
					<OkIcon
						className={this.state.added ? '' : 'hidden'}/>
          		</li>
	    	
	    )
	}

	handleClick() {
		this.setState({added: true})
	}
}
