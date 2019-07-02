const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name:{
		type: String,
		require: true
	},
	password:{
		type: String,
		require: true
	}
});

module.exports = User = mongoose.model('UserSchema ', UserSchema);
