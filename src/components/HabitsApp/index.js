import React, { Component } from 'react';
import { connect } from 'react-redux';
import Division from '../Division';
import Title from '../Title';
import Input from '../Input';
import List from '../List';
import FriendList from '../FriendList';
import './HabitApp.css';

import { addHabit, addFriendHabit, warnHabit, deleteHabit } from '../../actions';

const mapStateToProps = store => {
	return {
		person: store.person,
		friend: store.friend
	};
};

const mapDispatchToProps = dispatch => {
  return {
    addHabit: name => dispatch(addHabit(name)),
    addFriendHabit: name => dispatch(addFriendHabit(name)),
    deleteHabit: id => dispatch(deleteHabit(id)),
    warnHabit: id => dispatch(warnHabit(id))
  }
};

class HabitsApp extends Component {

	render() {
		const { person, friend } = this.props;

		return (
			<div>
				<Title text="О себе" />
				<Division text="Хобби"/>
				<Input isFriend={false} addHabit={addHabit} habits={person.habitList} />
				<ul className="list">
					<List deleteHabit={deleteHabit} habits={person.habitList} />
				</ul>
				<Title text="Друг" />
				<Division text="Хобби"/>
				<Input isFriend={true} addHabit={addFriendHabit} habits={friend.friendList}/>
				<ul className="list">
					<FriendList addHabitToPerson={addHabit} habits={friend.friendList} />
				</ul>
			</div>

    	)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitsApp);
