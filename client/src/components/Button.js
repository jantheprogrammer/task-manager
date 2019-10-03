import React, {Component} from 'react'

class Button extends Component {
  state = {}
  render() {
    return (
      <div className="new-button">
        <button onClick={() => this.props.toggleModal()}>+</button>
      </div>
    )
  }
}

export default Button
