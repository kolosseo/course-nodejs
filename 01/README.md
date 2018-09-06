# Homework Assignment #1

A simple http api server who just manages some route.
Only GET method.



## The Assignment:

Please create a simple "Hello World" API. Meaning:
1. It should be a RESTful JSON API that listens on a port of your choice.
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want.


## Init

`node index.js`



## Routes:

- /hello   (status 200)
- /ping    (status 200)
- /bye     (status 401)
- /(:any)  (status 404)
