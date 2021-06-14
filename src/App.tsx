import React from 'react'
import './App.css'
import Filter from './components/Filter'
import Logo from './components/Logo'
import Sort from './components/Sort'
import Ticket from './components/Ticket'

function App() {
  return (
    <div className="wrapper">
        {/* <div className="header">dfzdfzdf</div> */}
        <Logo />
        <div className="container">
          <Filter />
          <div className="content-wrapper">
            <Sort />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <div className="lazy">Показать ещё 5 билетов!</div>
          </div>
        </div>
    </div>
  )
}

export default App
