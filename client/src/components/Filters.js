import React, { Component } from 'react';

class Filters extends Component {
	state = {}
	render() {
		return (
			<div className='filters'>
				<div className='filter red'></div>
				<div className='filter orange'></div>
				<div className='filter yellow'></div>
				<div className='filter green'></div>
			</div>
		);
	}
}

export default Filters;