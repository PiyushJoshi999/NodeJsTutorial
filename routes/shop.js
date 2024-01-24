const express = require('express');
const path = require('path');

const router = express.Router();

// router.use("/", (req, res, next) => {
//     console.log('In / middleware');
//     res.send('<h1>Hello from Express!!</h1>');
// });

router.use("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;