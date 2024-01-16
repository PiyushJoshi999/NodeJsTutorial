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

const http = require('http');

const routes = require('./routes');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(routes);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
