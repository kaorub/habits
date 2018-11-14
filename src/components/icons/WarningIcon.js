import React, { Component } from 'react';
import logo from './warn.png';
import {connect} from "react-redux";
import {addHabit, deleteHabit, warnHabit} from "../../actions";
import './icons.css';

class WarningIcon extends Component {
	render() {
		return (
          <img
            src={logo}
            alt="warning"
            id={this.props.id}
            className="right-icon"
            onClick={this.handleClick.bind(this)}
          />
	    )
	}

	handleClick() {
		this.props.warnHabit();
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
