import streams from '../apis/streams';
import * as types from './types';
import history from '../utils/routerHistory';


export const signIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId
  }
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT
  }
};

// use react-thunk syntax to be able to do sync requests
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({
    type: types.CREATE_STREAM,
    payload: response.data
  });
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({
    type: types.FETCH_STREAMS,
    payload: response.data
  });
};


export const fetchStream = streamId => async dispatch => {
  const response = await streams.get('/streams/' + streamId);
  dispatch({
    type: types.FETCH_STREAM,
    payload: response.data
  });
};

// some REST APIs consider:
// PUT - for updating ALL properties
// PATCH - for updating SOME properties
// in this particular case if 'json-server' receives PUT request - it replaces object with the new one
export const editStream = (streamId, formValues) => async dispatch => {
  const response = await streams.patch('/streams/' + streamId, formValues);
  dispatch({
    type: types.EDIT_STREAM,
    payload: response.data
  });
  history.push('/');
};


export const deleteStream = streamId => async dispatch => {
  await streams.delete('/streams' + streamId);
  dispatch({
    type: types.DELETE_STREAM,
    payload: streamId
  });
};
