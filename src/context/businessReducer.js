import {GET_BUSINESS} from './types'

export default(state, action) => {
  switch (action.type){
    case GET_BUSINESS: 
    return{
      ...state,
      businesses: action.payload
    }
    default: 
    return state
  }
}