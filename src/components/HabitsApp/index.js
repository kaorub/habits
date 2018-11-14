import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Title from '../Title';
import Input from '../Input';
import List from '../List';

import * as habitsActions from '../../actions';
import { addHabit, deleteHabit, warnHabit } from '../../actions';

const mapStateToProps = store => {
	console.log(store);
	return {
		person: store.person,
		friend: store.person
	};
}

const mapDispatchToProps = dispatch => {
  return {
    addHabit: name => dispatch(addHabit(name)),
    deleteHabit: id => dispatch(deleteHabit(id)),
    warnHabit: id => dispatch(warnHabit(id)),
  }
}

class HabitsApp extends Component {

	render() {
		const { habitList, person, friend } = this.props;

		return (
			<div>
				<Title text="О себе" />
				<Input addHabit={addHabit} />
				<List deleteHabit={deleteHabit} habits={person.habitList} />
				<Title text="Друг" />
				<Input addHabit={addHabit} />
				<List habits={friend.habitList} />
			</div>

    	)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitsApp);
