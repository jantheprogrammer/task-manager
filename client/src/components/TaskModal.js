import React, {Component, Fragment} from 'react'

import {ReactComponent as CreateIcon} from '../assets/create.svg'
import {ReactComponent as SaveIcon} from '../assets/save.svg'
import {ReactComponent as DeleteIcon} from '../assets/delete.svg'
import {ReactComponent as BackIcon} from '../assets/back.svg'
import {ReactComponent as CloseIcon} from '../assets/close.svg'

class TaskModal extends Component {
  constructor(props) {
    super(props)
    this.state = {priority: 2, done: false, _id: undefined}
  }

  handleChange = e => {
    const field = e.target.name
    let value = e.target.value

    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }
    if (field === 'priority') value = Number(value)

    this.setState({[field]: value})
  }

  createData() {
    const {task, deadline, done, priority, _id} = this.state

    const data = {
      task: task,
      deadline: deadline,
      priority: Number(priority),
      done: done,
      _id: _id,
    }

    return data
  }

  getBorderColor(priority) {
    const data = this.props.data
    if ((data && data.done === false) || this.state.done === false) {
      switch (priority) {
        case 1:
          return 'red-border'
        case 2:
          return 'orange-border'
        case 3:
          return 'yellow-border'
        default:
          return 'green-border'
      }
    } else {
      return 'green-border'
    }
  }

  componentDidMount() {
    if (this.props.data) {
      this.setState({...this.props.data})
    }
  }

  render() {
    const {toggleModal, handleDelete, handleSubmit, data} = this.props
    return (
      <div className="task-modal-container">
        <div className="task-modal">
          <div
            className={`task-modal-header ${this.getBorderColor(
              this.state.priority
            )}`}
          >
            {data ? 'Task detail' : 'New task'}
            <CloseIcon onClick={() => toggleModal()} />
          </div>

          <form onSubmit={e => handleSubmit(e, this.createData())}>
            <div className="form-field">
              <div className="label">Task description</div>
              <div className="field">
                <textarea
                  required
                  disabled={data && data.done}
                  placeholder="Your task!"
                  defaultValue={data ? data.task : ''}
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
                  <input
                    required
                    disabled={data && data.done}
                    defaultValue={data ? data.deadline : ''}
                    min={new Date(Date.now()).toISOString().slice(0, 10)}
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
                    disabled={data && data.done}
                    defaultValue={data ? data.priority : 2}
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

            <div className="form-field">
              <div className="label">Done</div>
              <div className="field">
                <input
                  disabled={data ? false : true}
                  defaultChecked={data ? data.done : false}
                  type="checkbox"
                  name="done"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="task-modal-footer">
              {data ? (
                <Fragment>
                  <button type="submit">
                    <SaveIcon />
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={e => handleDelete(e, data._id)}
                  >
                    <DeleteIcon />
                    Delete
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <button type="submit">
                    <CreateIcon />
                    Create
                  </button>
                  <button type="button" onClick={() => toggleModal()}>
                    <BackIcon />
                    Back
                  </button>
                </Fragment>
              )}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TaskModal
