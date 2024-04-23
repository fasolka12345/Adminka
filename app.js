const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 
     
const PORT = 3000;
const app = express();
     
app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')), 
  mainRoute, 
  gamesRouter
  ); 
     
app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})
      