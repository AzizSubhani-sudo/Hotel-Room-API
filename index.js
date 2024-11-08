const express = require('express'); //importing express in this project 
const app = express(); // cloning/blueprint the express to app variable
const data = require('./data'); //importing data of rooms from data.js file
const room = data.rooms; // store all rooms data from data.js file to room variable

app.get('/rooms',(req, res)=>{ //endpoint for /api/rooms
    res.send(room); //display all rooms
}
);

app.get('/rooms/available',(req, res)=>{ //endpoint for /api/rooms/available
    const result = room.filter((room)=>{ return room.available == true}); //filtering available rooms
    res.send(result); //send respond of available rooms
}
);

app.get('/rooms/single',(req, res)=>{ //endpoint for /api/rooms/single
    const result = room.filter((room)=>{ return room.type == 'single'}); //filtering single rooms
    res.send(result); //send respond of single rooms
}
);

app.get('/rooms/double',(req, res)=>{ //endpoint for /api/rooms/double
    const result = room.filter((room)=>{ return room.type == 'double'}); //filtering double rooms
    res.send(result); //send respond of double rooms
}
);

app.get('/rooms/price/under-150',(req, res)=>{  //endpoint for /api/rooms/price/under-150
    const result = room.filter((room)=>{ return room.price < 150}); //filtering rooms whose price under 150
    res.send(result); // send respond of rooms that price under 150
}
);

app.listen(3000, ()=>{ //confirming function that our server is listening on port 3000
    console.log("Server is listening on port 3000. "); //display that server is listening on port 3000
});