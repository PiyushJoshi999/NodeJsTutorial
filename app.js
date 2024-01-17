// const http = require('node:http');

// // function reqListner(req, res){

// // }

// const server = http.createServer((req, res) => {
//     //console.log(req.url, req.method, req.headers);
//     //process.exit(); //it stops the server from receiving requests from the user

//     const url = req.url;
//     if(url === '/'){
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title><head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
//         res.write('</html>');
//         return res.end();
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title><head>');
//     res.write('<body><h1>Hello, This is my first server</h1></body>')
//     res.write('</html>');
//     res.end();
// });

// server.listen(4000);



//Importing routes file to create server for incoming requests

// const http = require('http');

// const routes = require('./routes');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer(routes);

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


//Implementing Express Js framework in node

//Command to start express js project: npm install --save express
//Command to create package.json file: npm init
//Command to create node_module file:  npm install --save-dev
//Command to start the node js server: node app.js or npm start


const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use((req, res, next) => {

    console.log('In the middleware');
    next(); //should be used when we are not sending any response

});

app.use((req, res, next) => {

    console.log('In another middleware');
    res.send('<h1>Hello from Express</h1>')
    //next();

});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
