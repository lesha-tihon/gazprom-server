const express = require('express');
const app     = express();
const port    = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});

function generator (count) {
  let items = [];

  for (let i = 1; i <= count; i++) {
    items.push({
      id: i,
      name: `Name ${i}`
    });
  }

  return items;
}

app.get('/items', (req, res) => {
  res.send(generator(100));
});