import React, {Component} from 'react'
import request from 'superagent'
import {user} from '../utils/api'

class Login extends Component {
  state = {user: {}}

  handleChange = e => {
    const field = e.target.name

    this.setState({[field]: e.target.value})
  }

  createData() {
    const data = {
      name: this.state.name,
      psw: this.state.psw,
    }
    return data
  }

  handleSubmit = e => {
    e.preventDefault()
    const data = this.createData()
    request
      .post(user.login)
      .send(data)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.fname}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="psw"
            value={this.state.lname}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Login
