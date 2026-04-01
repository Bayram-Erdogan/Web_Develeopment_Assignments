'use strict';

const reqresApiKey = 'reqres_1751820b40804df48bc6f2057e1973c4';

const reqresUrl = 'https://reqr-es.in/api/unknown/1234';

const callApi = async () => {
  try {
    const data = await fetch(reqresUrl, {headers: {'x-api-key': reqresApiKey}});
    const result = await data.json();
    console.log('data', data);
    console.log('result', result);
  } catch (error) {
    console.log("It doesn't work", error);
  }
};

callApi();
