import React, {Component, Fragment} from 'react'

class TaskModal extends Component {
  constructor(props) {
    super(props)
    this.state = {priority: 2}
  }

  // FIX DATA
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
    const {task, deadline, done, priority} = this.state
    let data = {}

    if (!this.props.data) {
      data = {
        task: task,
        deadline: deadline,
        priority: Number(priority),
        done: false,
        _id: undefined,
      }
    } else {
      data = {
        task: task ? task : this.props.data.task,
        deadline: deadline ? deadline : this.props.data.deadline,
        priority: Number(priority),
        done: done ? done : this.props.data.done,
        _id: this.props.data._id,
      }
    }
    console.log('DATA: ', data)
    return data
  }

  getBorderColor(priority) {
    const data = this.props.data
    console.log(data, data && !data.done)
    console.log(this.state, this.state.done === false)
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
    this.setState({...this.props.data})
  }

  render() {
    const {toggleModal, handleSubmit, handleDelete, data} = this.props
    console.log('PPP: ', this.state)
    return (
      <div className="task-modal-container">
        <div className="task-modal">
          <div
            className={`task-modal-header ${this.getBorderColor(
              this.state.priority
            )}`}
          >
            {data ? 'Task detail' : 'New task'}
            <button onClick={() => toggleModal()}>X</button>
          </div>

          <div className="form">
            <div className="form-field">
              <div className="label">Task</div>
              <div className="field">
                <textarea
                  required={true}
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
                  onChange={e => this.handleChange(e)}
                  // TODO: fix change of checkbox
                />
              </div>
            </div>

            <div className="task-modal-footer">
              {data ? (
                <Fragment>
                  <button onClick={e => handleSubmit(this.createData())}>
                    Save
                  </button>
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
