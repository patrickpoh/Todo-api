//load all the modules to sequelize and then return the database connections to server.js
var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/data/dev-todo-api.sqlite'
});

var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js'); //lets you load in sequelize models from seperate file
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

