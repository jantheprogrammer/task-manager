import React from 'react'
import './App.css'
import Layout from './components/Layout'
import Tasks from './components/Tasks'
import Button from './components/Button'
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <Layout>
        <Title />
        <Tasks />
        <Button />
      </Layout>
    </div>
  )
}

export default App
