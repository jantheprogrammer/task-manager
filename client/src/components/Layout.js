import React, {Component} from 'react'
import request from 'superagent'

import {task} from '../utils/api'
import Filters from './Filters'
import Tasks from './Tasks'
import NewButton from './NewButton'
import Title from './Title'
import TaskModal from './TaskModal'
import {NoTasks, Loading} from './EmptyTasks'

class Layout extends Component {
  state = {
    active_task: undefined,
    filter: undefined,
    modal_visible: false,
    data: undefined,
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

  handleSubmit = (e, data) => {
    e.preventDefault()
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

  handleDelete = (e, id) => {
    e.preventDefault()
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

        {data ? (
          data.length ? (
            <Tasks filter={filter} data={data} toggleModal={this.toggleModal} />
          ) : (
            <NoTasks />
          )
        ) : (
          <Loading />
        )}
        <NewButton toggleModal={this.toggleModal} />

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
