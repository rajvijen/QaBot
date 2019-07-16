# QaBot-APIs [![HitCount]([![HitCount](http://hits.dwyl.io/rajvijen/rajvijen/QaBot.svg)](http://hits.dwyl.io/rajvijen/rajvijen/QaBot) 

QaBot is a StachOverflow like online question-answer platform with minimal features.

QaBot API is an API's collection which can be used to make the Backend of any Fullstack Application. These are the folllowing features in the given API's
<ul>
<li>Create a User</li>
<li>Post a Question</li>
<li>Post a Answer to the existing question</li>
<li>Clap on the answer(upvote)</li>
<li>Auhtentication and Role based Access to the StackHolders</li>
</ul>

### Prerequisites

To work with the api you must have to install the following:
* [NodeJS](https://nodejs.org/en/download/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [MongoDB Server](https://docs.mongodb.com/manual/installation/) - NoSql Database and server
* [Postman](https://www.getpostman.com/downloads/) - API development environment

## Installation

Before doing anything you have to clone or download(and unzip) the project folder, open terminal and navigate to the project folder and run:

```bash
npm install
```
This will install all the dependencies required by the project.

## Getting Started

To start using this API, start your local database server, open terminal and navigate to the project folder and run:
```bash
npm run start
```
If an error occur, check your database server or check if you have installed the prerequisites correctly.

If there is no error, open Postman and create and send a new get request to:

```
http://localhost:3000/
```
Expected Output: 
```
{
	message: "Welcome to QaBot..."
}
```
Firstly, you have to create a new user for working with the API.

Send a `POST` request to:

```
http://localhost:3000/api/auth/register
```

# API endpoints:
 - TODO
