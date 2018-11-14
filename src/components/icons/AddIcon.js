import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './add.gif';
import {connect} from "react-redux";
import {addHabit, deleteHabit, warnHabit} from "../../actions";
import './icons.css';

class AddIcon extends Component {
	render() {
		return (
				<img 
					src={logo}
					alt="add" 
					id={this.props.id}
					className={this.props.hovered ? 'left-icon' : 'hidden'}
					onClick={this.handleClick.bind(this)}
				/>
	    )
	}

	handleClick() {
		this.props.addHabit();
		this.props.onClick();
	}
}

AddIcon.propTypes = {
  addHabit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default connect(state => ({
  person: state.person,
  friend: state.friend,
}), dispatch => ({
  addHabit: name => dispatch(addHabit(name)),
  deleteHabit: id => dispatch(deleteHabit(id)),
  warnHabit: id => dispatch(warnHabit(id)),
}))(AddIcon);
