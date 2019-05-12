{
  const getLocationSync = async () => {
    const getCoordinates = async () => {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };
    // notice, no then(), cause await would block and
    // wait for the resolved result
    const position = await getCoordinates();
    // let latitude = position.coords.latitude;
    // let longitude = position.coords.longitude;
    // let url = Constants.OSMAP_URL + latitude + "&lon=" + longitude;

    // Actually return a value
    return position;
  };

  exports.getLocationSync = getLocationSync;

  /** Usage: */
  // import { getLocationSync } from './Util';
  // getLocationSync().then(loc => {
  //   console.log(loc);
  // });
}
