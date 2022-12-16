// var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


// Create Collection (Table)
// const url = "mongodb://localhost:27017/";
// const config = {
//     connectTimeoutMS: 5000,
//     useUnifiedTopology: true
// }

// async function mongodb() {

//     try {
//         const client = await MongoClient.connect(url, config);
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



// Insert Data 

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



// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// (async function () {
//     try {
//         const clinet = await MongoClient.connect(url);
//         const dbName = clinet.db("mydb");
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
//         await dbName.collection("customer").insertMany(response)
//         clinet.close();

//     } catch (err) { console.log(err) }
// })
//     ()