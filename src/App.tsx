import React from 'react'
import './App.css'
import Filter from './Filter'
import Logo from './Logo'
import Sort from './Sort'
import Ticket from './Ticket'

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
