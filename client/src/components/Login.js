import React, {Component} from 'react'
import request from 'superagent'
import {user} from '../utils/api'

class Login extends Component {
  state = {user: {}}

  handleChange = e => {
    const field = e.target.name

    this.setState({[field]: e.target.value})
  }

  handleSubmit = e => {
    console.log(this.state)

    e.preventDefault()
  }

  fetchUser() {
    request
      .get(user.get)
      .then(res =>
        this.setState({
          user: res.body,
        })
      )
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          First name:
          <br />
          <input
            type="text"
            name="name"
            value={this.state.fname}
            onChange={this.handleChange}
          />
          <br />
          Last name:
          <br />
          <input
            type="text"
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
