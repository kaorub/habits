import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './close.png';
import './icons.css';
import { addHabit, deleteHabit, warnHabit } from '../../actions';

class CloseIcon extends Component {
	render() {
		return (
				<img 
					src={logo}
					alt="delete" 
					id={this.props.id}
					className={this.props.hovered ? 'left-icon' : 'hidden'}
					onClick={this.handleClick.bind(this)}
				/>
	    	
	    )
	}

	handleClick(e) {
		this.props.deleteHabit(e.target.id);
	}
}

CloseIcon.propTypes = {
  deleteHabit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default connect(state => ({
	person: state.person,
	friend: state.friend,
}), dispatch => ({
    addHabit: name => dispatch(addHabit(name)),
    deleteHabit: id => dispatch(deleteHabit(id)),
    warnHabit: id => dispatch(warnHabit(id)),
}))(CloseIcon);
