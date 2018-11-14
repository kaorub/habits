import React, { Component } from 'react';
import logo from './warn.png';
import {connect} from "react-redux";
import {addHabit, deleteHabit, warnHabit} from "../../actions";

class WarningIcon extends Component {
	render() {
		return (
          <img
            src={logo}
            alt="warning"
            id={this.props.id}
            onClick={this.handleClick.bind(this)}
          />
	    )
	}

	handleClick(e) {
		console.log(e.target.name);
		this.props.warnHabit(e.target.id);
	}
}

export default connect(state => ({
  person: state.person,
  friend: state.friend,
}), dispatch => ({
  addHabit: name => dispatch(addHabit(name)),
  deleteHabit: id => dispatch(deleteHabit(id)),
  warnHabit: id => dispatch(warnHabit(id)),
}))(WarningIcon);
