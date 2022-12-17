// var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":

// const url = "mongodb://localhost:27017/myDatabase";

// MongoClient.connect(url, (err,res)=>{
//     if (err) throw err;
//     console.log('database created!');
//     res.close();
// })


// Create Collection (Table)

// const url = "mongodb://localhost:27017/";
// async function mongodb() {

//     try {
//         const client = await MongoClient.connect(url);
//         const dataBaseName = client.db('mydb');

//         dataBaseName.createCollection("userPosr", (err, res) => { 
//             if(err) throw err;
//             console.log("Collection Created!")
//             console.log(res)
//             client.close();
//         })
//     }
//     catch (error) {
//         console.error(error)
//     }
// }
// mongodb();



// Insert One Data 

// const url = "mongodb://localhost:27017/";
// const config = {
//     connectTimeoutMS: 2000,
//     useUnifiedTopology: true
// }

//     async function abc ()  {
//         try {
//             const clinet = await MongoClient.connect(url, config);

//             const myDbName = clinet.db('mydb');
//             const obj = { name: 'jaydeep', pass: 1, email: 'jaydeep@gmail.com' }
//             myDbName.collection("userPosr").insertOne(obj, (err, res) => {
//                 if (err) throw err;
//                 console.log('Data Inserted', res)
//                 clinet.close();
//             })

//         } catch (err) { console.error(err) }
//     }
// abc();  



// Insert Many Data 

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
// (async function () {
//     try {
//         const clinet = await MongoClient.connect(url);
//         const dbName = clinet.db("mydb");
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json())
//         await dbName.collection("album").insertMany(response)
//         clinet.close();

//     } catch (err) { console.log(err) }
// })
//     ()


const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

(async function () {
    try {
        const client = await MongoClient.connect(url);
        const dbName = client.db("myDatabase");
        const response = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
        await dbName.collection('userNew').insertMany(response)
        client.close();
    } catch (err) { console.log(err) }
})
    ()