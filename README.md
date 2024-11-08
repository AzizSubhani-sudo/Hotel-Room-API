# Hotel-Room-API
GET-only API for hotel room management and inventory.
1. Instructions for installing dependencies
  write command in vs-code terminal 
    i. npm i express
    ii. npm i nodemon
2. How to start the server
   write command in vs-code terminal 
    i. node index.js
3. A list of API endpoints with example of requests and responses
   i. write command on Postman: GET http://localhost:3000/rooms
   Result: {
        "id": 1,
        "roomNumber": "101",
        "type": "single",
        "price": 100,
        "available": true
    },
    {
        "id": 2,
        "roomNumber": "102",
        "type": "double",
        "price": 150,
        "available": false
    },
    {
        "id": 3,
        "roomNumber": "103",
        "type": "suite",
        "price": 250,
        "available": true
    },
    {
        "id": 4,
        "roomNumber": "104",
        "type": "double",
        "price": 200,
        "available": true
    },
    {
        "id": 5,
        "roomNumber": "105",
        "type": "single",
        "price": 120,
        "available": false
    }
   ii. write command on Postman to for GET http://localhost:3000/rooms/available
   Result: {
        "id": 1,
        "roomNumber": "101",
        "type": "single",
        "price": 100,
        "available": true
    },
    {
        "id": 3,
        "roomNumber": "103",
        "type": "suite",
        "price": 250,
        "available": true
    },
    {
        "id": 4,
        "roomNumber": "104",
        "type": "double",
        "price": 200,
        "available": true
    }
   iii. write command on Postman: GET http://localhost:3000/rooms/single
   Result: {
        "id": 1,
        "roomNumber": "101",
        "type": "single",
        "price": 100,
        "available": true
    },
    {
        "id": 5,
        "roomNumber": "105",
        "type": "single",
        "price": 120,
        "available": false
    }
   iv. write command on Postman: GET http://localhost:3000/rooms/double
   Result: {
        "id": 2,
        "roomNumber": "102",
        "type": "double",
        "price": 150,
        "available": false
    },
    {
        "id": 4,
        "roomNumber": "104",
        "type": "double",
        "price": 200,
        "available": true
    }
   v. write command on Postman: GET http://localhost:3000.rooms/price/under-150
   Result: {
        "id": 1,
        "roomNumber": "101",
        "type": "single",
        "price": 100,
        "available": true
    },
    {
        "id": 5,
        "roomNumber": "105",
        "type": "single",
        "price": 120,
        "available": false
    }

Thanks to readme!
