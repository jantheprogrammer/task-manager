import React, {Component} from 'react'

class Task extends Component {
  state = {}

  doIt(task) {
    if (!task.done) {
      switch (task.priority) {
        case 1:
          return 'red'
        case 2:
          return 'orange'
        case 3:
          return 'yellow'
        default:
          return 'green'
      }
    } else {
      return 'green'
    }
  }

  render() {
    const {task} = this.props
    return (
      <div className="task" onClick={e => this.props.toggleModal(task)}>
        <div className="task-container">
          <div className="task-description">{task.task}</div>
          <div className="task-deadline">Deadline: {task.deadline}</div>
        </div>
        <div className={`priority ${this.doIt(task)} `}></div>
      </div>
    )
  }
}

export default Task
