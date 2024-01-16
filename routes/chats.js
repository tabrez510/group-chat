const fs = require('fs');

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    fs.readFile('message.txt', (err, data) => {
        if(err){
            data = `No chats exist`;
        }
        res.send(`<p>${data}</p><form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
            <input type="text" name="message"/>
            <input type="hidden" name="username" id="username" />
            <button type="submit">Send</button>
        </form>`);
    })
});

router.post('/', (req, res, next) => {
    if(req.body.message){
        fs.appendFile('message.txt', `${req.body.username}: ${req.body.message} `, (err, data) => {
            if(err) console.log(err);
            else res.redirect('/');
        })
    }
    else {
        res.redirect('/');
    }
})

module.exports = router;