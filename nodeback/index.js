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


// Set Deta Using Api
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



// Get Data In MongoDb

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const express = require('express')
const app = express()
const port = 8080

MongoClient.connect(url, (err, res) => {
    if (err) throw err;
    const myDatabase = res.db('myDatabase');
    myDatabase.collection('userNew').find({}).toArray((err, result) => {
        if (err) throw err;
        app.get('/post', (req, res) => {
            res.send(result)
        })
        res.close();
    })
})
// app.get('/', (req, res) => {
//     res.send("Home Page")
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })



// Delete Only One Data Query

// const MongoClient = require("mongodb").MongoClient;
const urlDelete = "mongodb://localhost:27017/";
// const express = require('express')
// const appDelete = express()
// const portDelete = 8080


MongoClient.connect(urlDelete, (err, res) => {
    if (err) throw err;
    const myDatabaseDelete = res.db('myDatabase');
    function deleteP(req) {
        console.log("REQ", req)
        const query = {id: parseInt(req)}
        myDatabaseDelete.collection('userNew').deleteOne(query, (err, result) => {
            if (err) throw err;
            console.log(result)
        })
    }
    app.get('/delete', (req, response) => {
        deleteP(req?.query?.id)
        response.send('success')
    })
})
app.get('/', (req, res) => {
    res.send("Home Page")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// Delete Multiple Data From Table  Query
// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
// const express = require('express')
// const app = express()
// const port = 8080


// MongoClient.connect(url, (err, res) => {
//     if (err) throw err;
//     const myDatabase = res.db('myDatabase');
//     const query = { username: "Samantha" }
//     myDatabase.collection('userNew').deleteMany((err, result) => {
//         if (err) throw err;
//         app.get('/post', (req, res) => {
//             res.send(result)
//         })
//         res.close();
//     })
// })
// app.get('/', (req, res) => {
//     res.send("Home Page")
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })