module.exports = function (sequelize, DataTypes){
	return sequelize.define('user', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8,100]
			}
		}
	},{
		hooks: {
			beforeValidate: function (user, options){
				//user.email and convert it to a lowercase version of itself only when it is a string 
				//check if the email is typeof string then u change it to lower case
				if(typeof user.email === 'string'){
					user.email = user.email.toLowerCase();
				}
			}
		}
	});
}