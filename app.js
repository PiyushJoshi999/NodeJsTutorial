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

//Note: You should not send more than 1 response at a time.

/*
In your current setup, you are using app.use for both the "/add-product" and "/" paths. The issue is that app.use matches the specified path as a prefix for the route, so when you access "/add-product," it also matches the "/" path, and the first matching middleware (app.use("/")) is executed.

To fix this, you can use app.get for specific routes, and make sure to end the response within each route handler to prevent subsequent middleware from being executed. 
 */

//Command to install body-parser : npm install --save body-parser

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


// app.get("/add-product", (req, res, next) => {

//     console.log('In /add-product middleware');
//     res.send('<form action="/product" method="POST"><input type="text" name="title" ><button type="submit">Add Product</button></form>');

// });

// app.post("/product", (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use("/", (req, res, next) => {
//     console.log('In / middleware');
//     res.send('<h1>Hello from Express!!</h1>');
// });

//app.use('/admin', adminRouter);


app.use(adminRoutes);
app.use(shopRoutes);

//code for 404 error if user enters invalid url

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', 'error-404.html'));
// });

app.use(errorController.errMsg);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

