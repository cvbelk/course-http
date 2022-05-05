import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const middlewr = async (req, res, next) => {
  const infoUrl = 'http://api.weatherstack.com/current?access_key=39eb2a498ba90f14a159ab2fee943199&query=50.45,30.52&units=m';
  const reqOptions = {
    method: 'get',
    //headers: { authorization: `Bearer ${accessToken}` },
    url: infoUrl,
  }
  const weatherResponse = await axios(reqOptions);
  req.weather = weatherResponse.data;
  console.log(req.headers['host']);
  res.setHeader('User', 'Oleh');  
  next();
}

app.get('/hello', middlewr, (req, res) => {
  console.log(req.weather);
  res.send(`<h1>Hello <i>${res.getHeader('User')}!</i></h1>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

