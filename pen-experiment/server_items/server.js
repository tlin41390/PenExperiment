/*
const express = require("express");
var myparser = require("body-parser");
const app = express();

app.get("/", (req, res)=>{

    res.send("Qualtrics Id retriving!");
})
app.use(myparser.urlencoded({extended : true}));
app.post("/", function(request, response){
    console.log(request.body);
})

app.listen(8080,()=>{
    console.log("Node Server started on port 8080\n");
})

*
/
const http = require('http');
const server = http.createServer((req, res) => {
    let body = '';
  
    req.on('data', (chunk) => {
      body += chunk;
    });
  
    req.on('end', () => {
      //console.log(body.length);
      var item = parseInt(body);
      console.log("**********");
      if(body.length != 0){
        console.log(item);
      }
      
      
      // Process the data here
      //res.writeHead(200, {'Content-Type': 'text/plain'});
      //res.end('Data received');
    });
  });
  
  server.listen(8080, () => {
    console.log('Server started on port 8080');
  });

  // server.js
*/
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 4001;

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('circleClicked', () => {
    io.emit('updateScore', socket.id);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

  