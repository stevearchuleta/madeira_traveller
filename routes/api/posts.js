const express = require('express');
const router = express.Router();

// @description:    TEST ROUTE: THIS IS A GET TYPE WITH AN ENDPOINT OF API/POSTS (eventually I could describe this route as "user posts" or or "...whatever the route does")
// @route:          GET api/posts
// @access          Public
router.get(
    '/', (req, res) => { res.send('Posts Route') }
);

module.exports = router;