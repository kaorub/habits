import React, { Component } from 'react';
import {connect} from "react-redux";
import { addHabit, addFriendHabit, warnHabit, deleteHabit } from '../../actions';

class Input extends Component {

	constructor (props, context) {
    	super(props, context);
    	this.state = {
      		name: this.props.name || '',
    	};
  	}

	render() {
		return (
			<input 
				type="text"
				placeholder="Введите текст"
				value={this.state.name}
				onChange={this.handleOnChange.bind(this)}
				onKeyDown={this.handleSubmit.bind(this)}
			/>
    	)
	}

	handleOnChange(e) {
		this.setState({name: e.target.value});
	}

  	handleSubmit (e) {
    	const name = e.target.value.trim();
	    if (e.which === 13) {
	      if (this.props.isFriend) {
	      	this.props.addFriendHabit(name);
	      } else {
	      	this.props.addHabit(name);
	      }
	      this.setState({ name: '' });
	    }
  	}
}

export default connect(state => ({
  person: state.person,
  friend: state.friend,
}), dispatch => ({
  addHabit: name => dispatch(addHabit(name)),
  addFriendHabit: name => dispatch(addFriendHabit(name)),
}))(Input);
