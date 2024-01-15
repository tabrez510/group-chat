const fs = require('fs');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended : false}));

const loginRoutes = require('./routes/login')
const chatRoutes = require('./routes/chats')

app.use(loginRoutes);

app.use(chatRoutes);

app.listen('3000');