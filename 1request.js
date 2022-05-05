const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=39eb2a498ba90f14a159ab2fee943199&query=50.45,30.52&units=m';
const urlN = 'http://info.cern.ch/';
const urlNext = 'http://localhost:3000';

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  });

  response.on('end', () => {
    try {
      const body = JSON.parse(data) //if application/json
      console.log(body);
    } catch(error) {
      console.log('Not JSON!');
      console.log(data);
    }
  });

});

request.on('error', (error) => {
  console.log('An error', error)
});

request.end();