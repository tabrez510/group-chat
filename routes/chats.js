const fs = require('fs');

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('<form action="/" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>')
});

router.post('/', (req, res, next) => {
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }
    console.log(req.body);
    localStorage.setItem('username', `${req.body.username}`);
    if(req.body.message){
        fs.appendFile('message.txt', `${localStorage.getItem('username')}: ${req.body.message}`, (err, data) => {
            console.log(data);
        });
    }
    res.redirect('/');
})

module.exports = router;