const os = require('os')
const path = require('path');
const fs = require('fs');
const http = require("http");
const EventEmiter = require('events')


// Create File
// fs.writeFileSync('./hello.txt', 'new Data', (err,data) => {
//     console.log(err,data)
// })

// change File Name
// const pathe = fs.rename(source="./test.txt",destination="./hello.txt", (err,data)=> {
//     console.log(data)


// Copy File
// fs.cp(source = "./hello.txt", destination = "./helloNew.txt", (err, data)  => {
//     console.log(data)
// })


// Create Server
// http.createServer((req, res) => {
//     console.log(req.url)
//     if (req.url === '/contect') {
//         res.end("response from contect ");
//     }
//     else if (req.url === '/') {
//         res.end("response from home")
//     }
// }).listen(8080, () => {
//     console.log("Listening on Port 8080")
// })


// Set Seta Using Api
// const api = "https://dummyjson.com/products";

// fetch(api).then((response)=> {
//     return response.json();
// }).then((data)=> {
//     console.log(data);
//     const jsondata = JSON.stringify(data)
//     fs.writeFile('json.txt', jsondata, 'utf8', (err,data) => {
//         console.log('Writing JSON')
//     });
// })


// Get Json Data Using readFile on `
// fs.readFile('json.txt', 'utf8', (err,data)=> {
//     // console.log(data)
//     const objData = JSON.parse(data);
//     objData.products.map((val)=> {
//         console.log(val);
//     })
// });


// const event = new EventEmiter();
// event.on('dummy', () => {
//     console.log('dummy called')
// })

// event.emit("dummy")

