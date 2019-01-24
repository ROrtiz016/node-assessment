const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usersCtrl = require('./usersCtrl')
const port = 3000

app.use(bodyParser.json())

app.get('/api/user',usersCtrl.getUsers)

app.listen(port, () => {
  console.log(`Server online at port: ${port}`)
})