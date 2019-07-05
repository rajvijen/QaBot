const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User Schema
const PersonSchema = new Schema({
	name:{
		type: String,
		require: true
	},
	email:{
		type: String,
		required: true	
	},
	password:{
		type: String,
		require: true
	},
	username:{
		type: String
	},
	profilepic:{
		type: String,
		default: "https://learncodeonline.in/manicon.png"
	},
	date:{
		type: Date,
		default: Date.now
	} 
});

module.exports = Person = mongoose.model('PersonSchema', PersonSchema);
