import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { warnHabit } from "../../actions";
import logo from './warn.png';
import './icons.css';

class WarningIcon extends Component {
	render() {
		return (
          <img
            src={logo}
            alt="warning"
            className="right-icon"
            onClick={this.handleClick.bind(this)}
          />
	    )
	}

	handleClick() {
		this.props.warnHabit(this.props.warnId);
	}
}

WarningIcon.propTypes = {
  warnId: PropTypes.number.isRequired,
}

export default connect(state => ({
  person: state.person,
  friend: state.friend,
}), dispatch => ({
  warnHabit: id => dispatch(warnHabit(id)),
}))(WarningIcon);
