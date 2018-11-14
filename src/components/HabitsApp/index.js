import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Division from '../Division';
import Title from '../Title';
import Input from '../Input';
import List from '../List';
import FriendList from '../FriendList';
import './HabitApp.css';

import { addHabit, deleteHabit, warnHabit } from '../../actions';

const mapStateToProps = store => {
	return {
		person: store.person,
		friend: store.friend
	};
};

const mapDispatchToProps = dispatch => {
  return {
    addHabit: name => dispatch(addHabit(name)),
    deleteHabit: id => dispatch(deleteHabit(id)),
    warnHabit: id => dispatch(warnHabit(id)),
  }
};

class HabitsApp extends Component {

	render() {
		const { person, friend } = this.props;

		return (
			<div>
				<Title text="О себе" />
				<Division text="Хобби"/>
				<Input addHabit={addHabit} habits={person.habitList} />
				<List deleteHabit={deleteHabit} habits={person.habitList} />
				<Title text="Друг" />
				<Division text="Хобби"/>
				<Input addHabit={addHabit} habits={friend.habitList}/>
				<FriendList addHabitToPerson={addHabit} habits={friend.habitList} />
			</div>

    	)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitsApp);
