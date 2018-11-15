import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addHabit } from "../../actions";
import logo from './add.gif';
import './icons.css';

class AddIcon extends Component {
	render() {
		return (
				<img 
					src={logo}
					alt="add" 
					className={this.props.hovered ? 'left-icon' : 'hidden'}
					onClick={this.handleClick.bind(this)}
				/>
	    )
	}

	handleClick() {
		this.props.addHabit(this.props.habitName);
		this.props.onClick();
	}
}

AddIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  hovered: PropTypes.bool.isRequired,
  habitName: PropTypes.string.isRequired,
}

const mapStateToProps = store => {
	return {
		person: store.person,
		friend: store.friend
	};
};

const mapDispatchToProps = dispatch => {
  return {
    addHabit: name => dispatch(addHabit(name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIcon);
