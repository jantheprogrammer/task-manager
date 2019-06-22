import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import ToDoLayout from './components/ToDoLayout'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={ToDoLayout} />
      </div>
    </Router>
  )
}

export default App
