# wiki_rest

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

A RESTfull API for a sample wiki website that keeps articles with title and content as attributes.
It utilize the MongoDB as a backend database to store or retrieve articles.
It also supports CRUD operations via API calls:


## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
The following software must be installed before starting the project:

```
1- git
2- nodejs
3- mongodb (local) or mongodb atlas (on the cloud)
```
Clone the project by this command:
```
https://github.com/myakhlaqi/wiki_REST.git
```
### Installing dependency

This project required the following nodejs dependencies:


```
    "body-parser": "^1.20.1",
    "dotenv": "^16.0.3",
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "mongoose": "^6.8.3"

```
To install all dependencies run following command on the project root
```
npm install 
```
To configure the MongoDB connection string create a .env file and replace your connection string. The sample .env file content presented here:
```
MONGODB_URI="mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true"
PORT=3000
```
PORT refers to the nodejs server port on the server side.
### create wikiDB on mongodb server
If you use mongodbsh run following code:
```
use wikiDB
db.articles.insertMany([

{
    "title" : "REST",
    "content" : "REST is short for REpresentational State Transfer. IIt's an architectural style for designing APIs."
}

,
{

    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}
,

{

    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}
,

{

    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}
])
```
If you use mongodb compass create database and collection manually and import following sample documents into articles collection with copy/paste:
```
[

{
    "title" : "REST",
    "content" : "REST is short for REpresentational State Transfer. IIt's an architectural style for designing APIs."
}

,
{

    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}
,

{

    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}
,

{

    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}
]
```

## 🔧 Running <a name = "tests"></a>

After configuring everything in previous step you are ready to run the application locally.

To run the application locally you type:

```
npm run start
```
or
```
node index.js
```
Open following link to see the web application:
```
http://localhost:3000/
```
The online version of the application is up and running at this URL:
```

```


## 🎈 Usage <a name="usage"></a>
This API support following verbs:
1. get (/articles, /articles/:articleTitle)
2. post (/articles)
3. put (/articles)
4. delete (/articles, /articles/:articleTitle)
5. patch (/articles, /articles/:articleTitle)

### examples:
get the list of articles:
```
localhost:3000/articles
```
get a single article with "RESTful" title:
```
localhost:3000/articles/RESTful
```
## 🚀 Deployment <a name = "deployment"></a>

## Deploy in under 10 seconds

[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)
- Sets up instant continuous deployment on `git push`
- Realtime backend logs and API request monitoring

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

