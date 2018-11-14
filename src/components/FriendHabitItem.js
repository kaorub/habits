import React, { Component } from 'react';
import AddIcon from '../icons/AddIcon';
import WarningIcon from '../icons/WarningIcon';
import OkIcon from '../icons/OkIcon';
import { addHabit, deleteHabit, warnHabit } from '../../actions';

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
		          		addHabit={addHabit} />
	          		{this.props.habit.name}
	          		<WarningIcon
	          			/>
          		</li>
	    	
	    )
	}
}
