const { MongoClient } = require("mongodb");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const router=express.Router();
const { request } = require('http');
const dbName = "VarshaCreation";
var Document;
const mongoose =require('mongoose');
var nodemailer=require('nodemailer');
const url = "mongodb+srv://Mjodhwani:Mjdvnyc7@cluster0.dpxsq.mongodb.net/VarshaCreation?retryWrites=true&w=majority";
const client =MongoClient(url,{useNewUrlParser: true,useUnifiedTopology: true,});
var app = express();
const port = 3000;


app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 


app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});



               
 async function run() {
    
         await client.connect({ 
            useNewUrlParser: true,
            
            useUnifiedTopology: true,
           
          });
         console.log("Connected correctly to Database");
         

         const d = client.db(dbName);

         
         const col = d.collection("Register");
         
        
         
         
         


         
}


run().catch(console.dir);






app.post('/register',function(req,res)
         {
  
    res.status(200).send({"message":"Data Recieved"});
    var email=req.body.email;
    var name=req.body.name;
    var message="Hi "+req.body.name+"\n \nThis is just a confirmation mail,We are glad that you chose us and are proud to serve you.\nWe hope to see you soon and serve you;Thank You";

    Document=req.body;
    var p =  client.db("VarshaCreation").collection("Register").insertOne(Document);
   console.log("Document inserted by the name "+req.body.name);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'varshacreationpimpri',
        pass: 'Mjdvnyc7@'
      }
    });
    
    var mailOptions = {
      from: 'varshacreationpimpri',
      to: email,
      subject: 'Confirmation Mail',
      text: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

      });

