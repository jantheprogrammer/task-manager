import React, { Component } from 'react'
import Filters from './Filters'

class ToDoLayout extends Component {
    state = {}
    render() {
        return (
            <div className='layout'>
                <Filters />
                {this.props.children}
            </div >
        )
    }
}

export default ToDoLayout
