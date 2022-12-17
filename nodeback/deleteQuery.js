
// Delete Only One Data Query

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const express = require('express')
const app = express()
const port = 8080


MongoClient.connect(url, (err, res) => {
    if (err) throw err;
    const myDatabase = res.db('myDatabase');
    const query = { username: "Samantha" }
    myDatabase.collection('userNew').deleteOne(query, (err, result) => {
        if (err) throw err;
        app.get('/post', (req, res) => {
            
            res.send(result)
        })
        res.close();
    })
})
app.get('/', (req, res) => {
    res.send("Home Page")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
