const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form action="/" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
        <input type="text" name="username" id="username"/>
        <button type="submit">Login</button>
    </form>`);
})

module.exports = router;