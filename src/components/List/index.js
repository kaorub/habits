import React, { Component } from 'react';
import HabitItem from '../HabitItem'

export default class List extends Component {
	render() {
		return (
			this.props.habits.map(habit => {
				return (<HabitItem 
					key={habit.id} habit={habit}/>)
			})
	    )
	}
}
