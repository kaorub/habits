import React, { Component } from 'react';
import FriendHabitItem from './FriendHabitItem'
import {connect} from "react-redux";
import {addHabit, deleteHabit, warnHabit} from "../actions";

class FriendList extends Component {
  render() {
    return (
      this.props.habits.map(habit => {
        return (<FriendHabitItem
          key={habit.id} habit={habit}/>)
      })
    )
  }
}

export default connect(state => ({
  person: state.person,
  friend: state.friend,
}), dispatch => ({
  addHabit: name => dispatch(addHabit(name)),
  deleteHabit: id => dispatch(deleteHabit(id)),
  warnHabit: id => dispatch(warnHabit(id)),
}))(FriendList);
