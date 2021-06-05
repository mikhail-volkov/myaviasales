import React from 'react'
import './App.css'
import Filter from './Filter'
import Logo from './Logo'
import Sort from './Sort'

function App() {
    return (
        <div className="wrapper">
            <div className="header">dfzdfzdf</div>
            <Logo />
            <div className="container">
                <Filter />
                <div className="content-wrapper">
                    <Sort />
                    <div className="content">Контент с карточками</div>
                </div>
            </div>
        </div>
    );
}

export default App
