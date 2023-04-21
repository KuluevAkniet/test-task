"use strict"; 
const fs = require('fs');
const express = require('express');
const app = express();
const axios = require('axios');
const client = require('./db');
const PORT = 4000


const config = { 
    connectionString: "postgres://candidate:62I8anq3cFq5GYh2u4Lh@rc1b-r21uoagjy1t7k77h.mdb.yandexcloud.net:6432/db1", 
      ssl: { 
        rejectUnauthorized: true, 
        ca: fs 
        .readFileSync("/home/akniet/.postgresql/root.crt") 
        .toString(), 
   },
};


async function sendData(){
    axios.get("https://rickandmortyapi.com/api/character")
    .then((result)=>{
        app.post('/', (req, res) => {
            res.send(result.data);
            const conv = result.data.results

             conv.forEach((el,idx) => {

                const insertQuery = `insert into persons(id, name, data)
                values('${el.id}', '${el.name}','${el}')`;

                 
                client.query(insertQuery)
                 
             });
            
        });
        
    })
    .catch((error) => {
        console.log("Error status", error);
    });

    return ;
}
sendData()

app.listen(PORT,() => {
    console.log(`Server is listening on port${PORT}`)
})



