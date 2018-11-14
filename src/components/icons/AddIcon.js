import React, { Component } from 'react';
import logo from './add.gif';
import {connect} from "react-redux";
import {addHabit, deleteHabit, warnHabit} from "../../actions";

class AddIcon extends Component {
	render() {
		return (
				<img 
					src={logo}
					alt="add" 
					id={this.props.id}
					className={this.props.hovered ? '' : 'hidden'}
					onClick={this.handleClick.bind(this)}
				/>
	    )
	}

	handleClick(e) {
		console.log(e.target.name);
		this.props.addHabit(e.target.name);
	}
}

export default connect(state => ({
  person: state.person,
  friend: state.friend,
}), dispatch => ({
  addHabit: name => dispatch(addHabit(name)),
  deleteHabit: id => dispatch(deleteHabit(id)),
  warnHabit: id => dispatch(warnHabit(id)),
}))(AddIcon);
