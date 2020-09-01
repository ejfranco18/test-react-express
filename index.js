// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // An api endpoint that returns a short list of items
// app.get('/api/getList', (req,res) => {
//     var list = ["item1", "item2", "item3"];
//     res.json(list);
//     console.log('Sent list of items');
// });

// // Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// const port = process.env.PORT || 5000;
// app.listen(port);

// console.log('App is listening on port ' + port);

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 5000;
app.get('/productdetail', async (req, res) => {
  const response = await fetch('https://api.mercadolibre.com/items/MLA875029375')
  const json = await response.json();
  res.json({
    "author": {
      "name": "Yamil",
      "lastname": "Lasso"
    },
    "item":{
      "id": json.id,
      "title": json.title
    }
  }
);
})
app.listen(port);
module.exports = app;

