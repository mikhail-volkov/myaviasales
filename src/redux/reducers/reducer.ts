
import { GET_SEARCH_ID, GET_TICKETS_ALL, SET_VISIBLE_TICKETS } from "../../constants/actionTypes"

const initialState = {
  searchId: '',
  tickets: [],
  visibleTickets: [],
  isLoading: false
}

const getTicketsReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case GET_SEARCH_ID: 
      return {...state, searchId: action.data.searchId}
    case GET_TICKETS_ALL:
      return {...state, tickets: action.tickets}
    case SET_VISIBLE_TICKETS:
      return {...state, visibleTickets: action.visibleTickets }
    default:
      return state
  }
}

export default getTicketsReducer