const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/submit-todos', (req, res) => {
  const todos = req.body;
  console.log(todos); // handle the list of todos here
  res.send('Received todos');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
