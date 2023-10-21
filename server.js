const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1sevinc2",
    database: "Game",
    port: 5432,
  },
});

app.use("db", db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));




app.listen(3000)


app.use(express.static(__dirname+'/'));


app.post('/',(req,res)=>{
  console.log(req.body);

});


app.get('/',(req,res)=>{
  fs.readFile('index.html','utf8',(err,data)=>{
    if (err) {
      console.log(err);
      return res.status(500).send ('Something went wrong');
    }
    res.send(data)
  });
});



app.get('/question',(req,res)=>{
  db("questions")
    .select('qw_content')
    .then(el => res.send((el)))
});


app.get('/variant',(req,res)=>{
  db("variant")
    .select().from('variant')
    .then(el => res.send((el)))
});
