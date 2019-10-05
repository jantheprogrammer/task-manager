import React, {Component} from 'react'
import request from 'superagent'

import {task} from '../utils/api'
import Filters from './Filters'
import Tasks from './Tasks'
import Button from './Button'
import Title from './Title'
import TaskModal from './TaskModal'

class Layout extends Component {
  state = {
    active_task: undefined,
    filter: undefined,
    modal_visible: false,
    data: [
      {
        _id: '5d8efd4e60fbcd4ef72e814b',
        task: 'Make money',
        done: false,
        priority: 3,
        __v: 0,
        deadline: '2019-09-11',
      },
      {
        _id: '8ef6481c9d44000040905e',
        task: 'Make a breakfast',
        done: false,
        priority: 2,
        deadline: '2019-10-01',
      },
      {
        _id: '5d8ef6481c9d440040905e',
        task: 'DO IT',
        done: true,
        priority: 2,
        deadline: '2019-10-10',
      },
      {
        _id: '5d8ef6481d44000040905e',
        task: 'Eh eh ',
        done: false,
        priority: 1,
        deadline: '2019-10-19',
      },
    ],
  }

  toggleModal = active_task => {
    this.setState(prevStat => ({
      modal_visible: !prevStat.modal_visible,
      active_task: active_task,
    }))
  }

  handleFilter = priority => {
    let filter
    if (priority === this.state.filter) {
      filter = undefined
    } else {
      filter = priority
    }

    this.setState({
      filter: filter,
    })
  }

  handleSubmit = data => {
    data._id
      ? request
          .put(task(data._id).put)
          .send(data)
          .then(res => {
            this.fetchTasks()
            this.toggleModal()
          })
          .catch(err => {
            this.toggleModal()
            console.error('PUT ERROR: ', err)
          })
      : request
          .post(task().post)
          .send(data)
          .then(res => {
            this.fetchTasks()
            this.toggleModal()
          })
          .catch(err => {
            this.toggleModal()
            console.error('POST ERROR: ', err)
          })
  }

  handleDelete = id => {
    request
      .delete(task(id).delete)
      .then(res => {
        this.fetchTasks()
        this.toggleModal()
      })
      .catch(err => {
        this.toggleModal()
        console.error('DELETE ERROR: ', err)
      })
  }

  fetchTasks() {
    request
      .get(task().get)
      .then(res => {
        // sorting priorities
        let data = res.body.sort((a, b) => a.priority - b.priority)
        // sorting done
        data.sort((a, b) => a.done - b.done)
        this.setState({
          data: data,
        })
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.fetchTasks()
  }

  render() {
    const {modal_visible, data, filter, active_task} = this.state
    return (
      <div className="layout">
        <Filters handleFilter={this.handleFilter} filter={filter} />
        <Title />
        <Tasks filter={filter} data={data} toggleModal={this.toggleModal} />
        <Button toggleModal={this.toggleModal} />

        {modal_visible && (
          <TaskModal
            data={active_task}
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    )
  }
}

export default Layout
