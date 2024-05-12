function getJsonData() {
    return fetch('../data.json')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
  }

  let data;
  let hasDataBeenCalled = false;
  
  function populateData() {
      if (!hasDataBeenCalled) {
          hasDataBeenCalled = true;
          return getJsonData().then(jsonData => {
            data = jsonData;
          });
        } else {
          return Promise.resolve(data);
        }
  }

  export { getJsonData, populateData, data };