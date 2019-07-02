const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const User = require('./models/User');

const app = express();

//Middleware for bodyparser
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

// DB Config
const db = require('./config/dev').mongodbURI;

// Connect to MongoDB 
mongoose
  .connect(db, { useNewUrlParser: true }) // Let us remove that nasty deprecation warrning :)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//-------------------------------------------------------
//------------ APIs ------------------------------------
//For testing purpose only
app.get("/", (req, res) => {
	res.status(200).end("Welcome to QaBot...");
}); 

// USer SignUp
app.post("/signup", async (req, res) => {
	const newUser = new User({
		name: req.body.name,
		password: req.body.password
	});
	
	//await newUser
	//	.save()
	//	.then(() => {
	//		res.status(200).send(newUser);
	//	})
	await User.findOne({ name: newUser.name})
		.then(async profile => {
			if(!profile){
				await newUser
					.save()
					.then(() => {
						res.status(200).send(newUser);
					})
					.catch(err => {
						console.log("Error is ",err.message);
					});
			} else{
				res.send("User already exists!!!");
			}
		})
		.catch(err => {
			console.log("Error is ", err.message);
		});
});


// @Login
app.post("/login", async (req, res) => {
	const newUser = {};
	newUser.name = req.body.name;
	newUser.password = req.body.password;
	
	await User.findOne({ name: newUser.name })
		.then(profile => {
			if(!profile){
				res.send("User not exist!");
			} else {
				if(profile.password == newUser.password){
					res.send("User is authenticated...");
				} else {
					res.send("User Unauthorized Access!!!");
				}
			}
		})
		.catch(err => {
			console.log("Error is ", err.message);
		});
});


// Server setup
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
