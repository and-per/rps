const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home', {
        player: "Player"
    });
    app.use(express.static(frontend))
});

router.get('/signin', (req, res) => {
    res.render('home', {
        player: req.query.username
    })
})

module.exports = router