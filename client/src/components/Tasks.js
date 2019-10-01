import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
	state = {}
	render() {
		return (
			<div className='tasks'>
				<Task priority={'red'} />
				<Task priority={'red'} />
				<Task priority={'orange'} />
				<Task priority={'green'} />
			</div>
		);
	}
}

export default Tasks;