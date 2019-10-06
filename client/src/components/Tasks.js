import React from 'react'
import Task from './Task'

const Tasks = ({data, toggleModal, filter}) => {
  const taskComponent = task => (
    <Task key={task._id} task={task} toggleModal={toggleModal} />
  )
  return (
    <div className="tasks">
      {filter
        ? filter === 'done'
          ? data
              .filter(task => task.done === true)
              .map(task => taskComponent(task))
          : data
              .filter(task => task.priority === filter && task.done === false)
              .map(task => taskComponent(task))
        : data.map(task => taskComponent(task))}
    </div>
  )
}

export default Tasks
