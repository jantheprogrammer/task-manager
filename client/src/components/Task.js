import React, { Component } from 'react';

class Task extends Component {
	state = {}
	render() {
		const { priority } = this.props
		return (
			<div className='task'>
				<div className='task-container'>
					<div className='task-title'>Task</div>
					<div className='task-deadline'>Deadline: 15. Aug 2019</div>
				</div>
				<div className={`priority ${priority} `}></div>
			</div>
		)
	}
}

export default Task;