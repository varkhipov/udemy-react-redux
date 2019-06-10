import * as types from '../actions/types';
import _ from 'lodash';


export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_STREAM:
    case types.CREATE_STREAM:
    case types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_STREAM:
      // DELETE_STREAM action returns only streamId in a payload
      return _.omit(state, action.payload);
    case types.FETCH_STREAMS:
      // FETCH_STREAMS action returns an array of streams
      // turn this array into object with properties keys equal to id's of streams in array (basically, turn array into map)
      // then merge old streams object with the new one using spread syntax
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state
  }
};
