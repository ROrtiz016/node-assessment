const users = require('./userData')

module.exports = {
  getUsers: (req, res, next) => {
    results = users
    if(req.query.age){
    results = results.filter((el)=> {
      return el.age < req.query.age
    })
  } 
    if(req.query.email){
      results = results.filter((el) => {
        return el.email === req.query.email
      })
      }
    if(req.query.favorites){
      results = results.filter((el) => {
        return el.favorites.includes(req.query.favorites)
      })
    }
    res.status(200).send(results)
  },

  getUserById: (req, res, next) => {
    var user;
    for (var i = 0; i < users.length; i++){
      if(req.params.userId <= users.length){
        user = users.filter((el) => {
          return el.id == req.params.userId;
        })
        res.status(200).send(user[0])
      }else{
        res.sendStatus(404)
      }
    }
  },

  getAdmins: (req, res, next) => {
    var admins = users;
    for(var i = 0; i < users.length; i++){
      if(users[i].type){
        admins = admins.filter((el) => {
          return el.type === 'admin'
        })
        res.status(200).send(admins)
      }
    }
  },

  getNonAdmin: (req, res, next) => {
    var nonAdmins = users;
    for(var i = 0; i < users.length; i++){
      if(users[i].type){
        nonAdmins = nonAdmins.filter((el) => {
          return el.type !== 'admin'
        })
        res.status(200).send(nonAdmins)
      }
    }
  },

  getUserType: (req, res, next) => {
    var userType = users
    for(var i = 0; i < users.length; i++){
      if(users[i].type === req.params.userType){
        userType = userType.filter((el) => {
          return el.type === req.params.userType;
        })
        res.status(200).send(userType)
      }
    }
  }, 

  updateUser: (req, res, next) => {
    const {id, first_name, last_name, type} = req.body
    for( var i = 0; i < users.length; i++){
      if(users[i].id == req.params.userId){
          users[i].id = id,
          users[i].first_name = first_name,
          users[i].last_name = last_name,
          users[i].type = type
      }
    }
    res.status(200).send(users)
  },

  addUser: (req, res, next) => {
    const {first_name, last_name, email, gender, language, age, city, state, type, favorites} = req.body
    users.push({
      id: users.length + 1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
      language: language,
      age: age,
      city: city,
      state: state,
      type: type,
      favorites: favorites
    })
    res.status(200).send(users)
  },

  removeUser: (req, res, next) => {
    users.splice(req.params.userId - 1, 1)
    res.status(200).send(users)
  }
}