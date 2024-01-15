const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<form action="/" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>');
})

module.exports = router;