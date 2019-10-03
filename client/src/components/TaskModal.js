import React, {Component, Fragment} from 'react'

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
    const {toggleModal, handleSubmit, handleDelete, data} = this.props
    console.log(data)
    return (
      <div className="task-modal-container">
        <div className="task-modal">
          <div className="task-modal-header">
            {data ? 'Task detail' : 'New task'}
            <button onClick={() => toggleModal()}>X</button>
          </div>

          <div className="form">
            <div className="form-field">
              <div className="label">Task</div>
              <div className="field">
                <textarea
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
                  {/* TODO: make own pattern and make dynamic min date*/}
                  <input
                    defaultValue={data ? data.deadline : ''}
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
                  defaultChecked={data ? data.done : false}
                  type="checkbox"
                  name="done"
                  // onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="task-modal-footer">
              {data ? (
                <Fragment>
                  <button onClick={e => console.log('Updated')}>Update</button>
                  <button onClick={() => handleDelete(data._id)}>Delete</button>
                </Fragment>
              ) : (
                <Fragment>
                  <button onClick={e => handleSubmit(this.createData())}>
                    Create
                  </button>
                  <button onClick={() => toggleModal()}>Close</button>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskModal
