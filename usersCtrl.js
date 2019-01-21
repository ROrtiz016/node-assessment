const users = require('./userData')

module.exports = {
  getUsers: (req, res, next) => {
    if(req.query.age){
      users = users.filter(function(el){
        return el.age < req.query.age
      })
    }
    if(req.query.email){
      users = users.filter(function(el){
        return el.email === req.query.email
      })
    }
  }
}