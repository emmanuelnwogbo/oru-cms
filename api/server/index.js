require("dotenv").config();
import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

import mongoose from 'mongoose';

import contactsRoutes from './routes/contacts';
import authentication from "./routes/authentication";
import leads from './routes/leads';

const app = express();

app.use(express.static('public'));

app.use(cors({
    origin: '*', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept'],
}))

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const {
  postContact,
  getContacts,
  getContact,
  putContact,
  deleteContact
} = contactsRoutes;

const {
  signup,
  getUsers,
  createUser,
  login
} = authentication;

const {
  postLead,
  putLead
} = leads;

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname, '../public/index.html'));
    res.send('hello world')
});


app.use(signup);
app.use(getUsers);
app.use(login);
app.use(createUser);
app.use(postContact);
app.use(getContacts);
app.use(getContact);
app.use(putContact);
app.use(deleteContact);
app.use(postLead);
app.use(putLead);

mongoose.connect(process.env.DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    socketTimeoutMS: 1000
}).then(() => {
    console.log('connected to database');


    server.listen(PORT, async (error) => {
      if (error) {
        return error;
      }
    
      return console.log(`server started on port here ${PORT}`);
    });
});