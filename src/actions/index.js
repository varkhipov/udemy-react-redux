import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => {
  // Middleware (Thunk) checks return type and intercepts execution if function is returned instead of object
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
      // payload: [
      //   {
      //     body: 'post body',
      //     id: 1,
      //     title: 'post title',
      //     userId: 1
      //   },
      //   {
      //     body: 'post2 body',
      //     id: 2,
      //     title: 'post2 title',
      //     userId: 2
      //   }
      // ]
    })
  }
};

// example with shorter version of function which returns a function
export const fetchUser = (userId) => (dispatch) => {
  _fetchUser(userId, dispatch);
};

// moved out to a separate function to be able to cache this specific instance
// because otherwise every time parent function returns a NEW instance of function
// so this becomes a new object in memory and cannot be retrieved from memoize cache
const _fetchUser = _.memoize(
  async (userId, dispatch) => {
    const response = await jsonPlaceholder.get('/users/' + userId);
    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    })
  }
);
