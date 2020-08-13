import React, {useReducer} from 'react'
import axios from 'axios';
import BusinessContext from './businessContext'
import BusinessReducer from './businessReducer'
import {GET_BUSINESS} from './types'



const BusinessState = (props) => {
  const initalState = {
    businesses: []
  };
  const [
    state, 
    dispatch
  ] = useReducer(BusinessReducer, initalState)

  const getBusiness = async () => {
    const res = await axios.get('http://localhost:1337/businesses');

    dispatch({
      type: GET_BUSINESS,
      payload: res.data
    })
  }

  return (
    <BusinessContext.Provider
    value={{
      businesses: state.businesses,
      getBusiness
    }}>
      {props.children}
      
    </BusinessContext.Provider>
  )
}

export default BusinessState
