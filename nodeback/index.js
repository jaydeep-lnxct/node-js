const MongoClient = require("mongodb").MongoClient;
const express = require('express')
const app = express()
const port = 8080
const url = "mongodb://localhost:27017/";


// Get Data In MongoDb


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



// Delete Only One Data Query

MongoClient.connect(url, (err, res) => {
    if (err) throw err;
    const myDatabaseDelete = res.db('myDatabase');
    function deleteP(req) {
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

