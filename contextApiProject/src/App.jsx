import React from 'react'
import UserContextprovider from './context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

const App = () => {
  return (
    <UserContextprovider>
      {/* <h1>React UseContext</h1> */}
      <Login/>
      <Profile/>
    </UserContextprovider>
  )
}

export default App
