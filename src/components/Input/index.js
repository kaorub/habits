import React, { Component } from 'react';
import autobind from 'autobind-decorator'

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
	      this.props.addHabit(name);
	      this.setState({ name: '' });
	    }
  	}
}

export default Input;
