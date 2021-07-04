import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Filter from './components/Filter'
import Logo from './components/Logo'
import Sort from './components/Sort'
import Ticket from './components/Ticket'
import { getID, getTicketsAll, visibleTicketsAll } from './redux/actions'

function App() {

  const searchId = useSelector( (state: any) => state.searchId)
  const dispatch = useDispatch()
  const visibleTickets = useSelector( (state: any) => state.tickets.slice(4))


  useEffect(() => {
    dispatch(getID())
  }, [dispatch])

  useEffect(() => {
    if (searchId) {
      dispatch(getTicketsAll(searchId))
      console.log(visibleTickets)
      dispatch(visibleTicketsAll(visibleTickets))
    }
  }, [searchId])

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
