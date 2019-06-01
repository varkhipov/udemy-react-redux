import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // use like componentDidMount
  useEffect(() => {
    const initGeolocation = () => {
      navigator.geolocation.getCurrentPosition(
        position => setLat(position.coords.latitude),
        error => setErrorMessage(error.message)
      )
    };
    initGeolocation();
  }, []);

  // return of an array is decided by fb convention
  return [lat, errorMessage];
};

export default useLocation;
