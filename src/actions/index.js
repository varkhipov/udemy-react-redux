import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => {
  // Middleware (Thunk) checks return type and intercepts execution if function is returned instead of object
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    })
  }
};

// example with shorter version of function which returns a function
export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceholder.get('/users/' + userId);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
};
