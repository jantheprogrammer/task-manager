import React, {Component} from 'react'
import request from 'superagent'
import {task} from '../utils/api'

class TaskModal extends Component {
  state = {}

  handleChange = e => {
    const field = e.target.name

    this.setState({[field]: e.target.value})
  }

  createData() {
    const data = {
      task: this.state.task,
      deadline: this.state.deadline,
      priority: Number(this.state.priority),
      done: false,
      _id: Math.random(),
    }
    return data
  }

  render() {
    const {toggleModal, handleSubmit, data} = this.props
    return (
      <div className="task-modal-container">
        <div className="task-modal">
          <div className="task-modal-header">
            {data ? 'Task detail' : 'New task'}
            <button onClick={() => toggleModal()}>X</button>
          </div>

          <div className="form">
            <div className="form-field">
              <div className="label">Name</div>
              <div className="field">
                <textarea
                  value={data ? data.task : undefined}
                  name="task"
                  rows="4"
                  onChange={e => this.handleChange(e)}
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <div className="form-field">
                <div className="label">Deadline</div>
                <div className="field">
                  {/* TODO: make own pattern and make dynamic min date*/}
                  <input
                    value={data ? data.deadline : undefined}
                    min="2019-10-02"
                    type="date"
                    name="deadline"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="form-field">
                <div className="label">Priority</div>
                <div className="field">
                  <select
                    value={data ? data.priority : undefined}
                    name="priority"
                    onChange={e => this.handleChange(e)}
                  >
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="task-modal-footer">
              <button onClick={e => handleSubmit(this.createData())}>
                Create
              </button>
              <button onClick={() => toggleModal()}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskModal
