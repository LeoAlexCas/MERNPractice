const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "esto": "es un json"
    });
});

module.exports = router;