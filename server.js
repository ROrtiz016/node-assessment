const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usersCtrl = require('./usersCtrl')
const port = 3000

app.use(bodyParser.json())

app.get('/api/user',usersCtrl.getUsers)
app.get('/api/user/:userId', usersCtrl.getUserById)
app.get('/api/admin', usersCtrl.getAdmins)
app.get('/api/nonadmin', usersCtrl.getNonAdmin)
app.get('/api/type/:userType', usersCtrl.getUserType)
app.put('/api/user/:userId', usersCtrl.updateUser)
app.post('/api/user', usersCtrl.addUser)
app.delete('/api/user/:userId', usersCtrl.removeUser)

app.listen(port, () => {
  console.log(`Server online at port: ${port}`)
})