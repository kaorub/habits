import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteHabit } from '../../actions';
import logo from './close.png';
import './icons.css';

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

	handleClick() {
		const { id } = this.props;
		this.props.deleteHabit(id);
	}
}

CloseIcon.propTypes = {
  id: PropTypes.number.isRequired,
  hovered: PropTypes.bool.isRequired,
}

const mapStateToProps = store => {
	return {
		person: store.person,
		friend: store.friend
	};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteHabit: id => dispatch(deleteHabit(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CloseIcon);
