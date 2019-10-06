import React from 'react'

const Task = ({task, toggleModal}) => {
  const getLineColor = task => {
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

  return (
    <div className="task" onClick={e => toggleModal(task)}>
      <div className="task-container">
        <div className="task-description">{task.task}</div>
        <div className="task-deadline">
          {task.done ? 'Done' : `Deadline: ${task.deadline}`}
        </div>
      </div>
      <div className={`priority ${getLineColor(task)}`}></div>
    </div>
  )
}

export default Task
