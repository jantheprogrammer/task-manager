import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import ToDoLayout from './components/ToDoLayout'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={ToDoLayout} />
      </div>
    </Router>
  )
}

export default App
