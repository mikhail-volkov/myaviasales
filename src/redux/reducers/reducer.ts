
import { GET_SEARCH_ID } from "../../api/constants/actionTypes"

const initialState = {
  searchId: '',
  tickets: [],
  isLoading: false
}

const getTicketsReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case GET_SEARCH_ID: 
      return {...state, tickets: action.tickets}
    default:
      return state
  }
}

export default getTicketsReducer