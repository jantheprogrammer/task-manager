import React, {Component} from 'react'
import request from 'superagent'

class Login extends Component {
  state = {fname: '', lname: ''}

  handleChange = e => {
    const field = e.target.name

    this.setState({[field]: e.target.value})
  }

  handleSubmit = e => {
    console.log(this.state)
    e.preventDefault()
    // request
    // .get()
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
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}
          />
          <br />
          Last name:
          <br />
          <input
            type="text"
            name="lname"
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
