import {getSearchId, getTickets} from '../../api'
import * as types from '../../constants/actionTypes'

const receiveSearchId = (data:any) => ({
  type: types.GET_SEARCH_ID,
  data
})

export const getID = () => (dispatch: any) => {
  getSearchId().then( data => dispatch(receiveSearchId(data)))
}

const receiveTickets = (tickets:any) => ({
  type: types.GET_TICKETS_ALL,
  tickets
})

export const getTicketsAll = (id:string) => (dispatch: any) => {
  getTickets(id).then( data => dispatch(receiveTickets(data)))
}

export const visibleTicketsAll = (data: any) => ({
  type: types.SET_VISIBLE_TICKETS,
  visibleTickets: data
})