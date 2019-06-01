import { useState, useEffect } from 'react';
import axios from 'axios';


// Hooks are invoked "after render"
const useResources = (resource) => {

  // 'useState(obj)' hook each time returns a new state instance where 'obj' is an initial value.
  //
  // This instance is an array which contains 2 elements:
  // [referenceToStateObject, referenceToSetterFunctionForThatObject]
  const [resources, setResources] = useState([]);

  // 'useEffect( () => {...}, [v1, v2, ...])' hook can work like lifecycle methods
  // 'componentDidMount' and 'componentDidUpdate' in React class-based components.
  //
  // () => {...} - a function or some code to be run.
  //
  // [v1, v2, ...] - is an array of values which are checked to decide if passed function
  // ('fetchResource' in this case) should be invoked.
  //
  // If [] nothing is checked then hook works like a 'componentDidMount'
  //
  // If [something] is checked then hook works like a 'componentDidUpdate':
  // if new [resource, ...] is equal to previous (for objects references are checked)
  // then new run is not done. This approach helps to avoid looping.
  useEffect(
    () => { fetchResource(resource) },
    [resource]
  );

  // Just a helper function to avoid nasty syntax in 'useEffect' hook.
  // Remember that this function returns a Promise so it is not called immediately.
  const fetchResource = async (resource) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/' + resource);
    setResources(response.data);
  };

  // The idea of nasty version of useEffect hook is that we use the following format: (f)(arg).
  // When a function is in parenthesis then it is not only created but also invoked.
  // So basically it means: (init anonymous function and execute it with)(arg)
  //
  // Implementation looks like the following:
  //
  // useEffect(
  //   () => {
  //     (async (resource) => {
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/' + resource);
  //       setResources(response.data);
  //     })(resource)
  //   },
  //   [resource]
  // );
  //
  // or alternatively (https://www.robinwieruch.de/react-hooks-fetch-data/) :
  //
  // useEffect(() => {
  //   const fetchResource = async (resource) => {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/' + resource);
  //     setResources(response.data);
  //   };
  //   fetchResource(resource);
  // }, [resource]);

  return resources;
};

export default useResources;
