const express = require('express');
const router = express.Router();

// @description:    TEST ROUTE: THIS IS A GET TYPE WITH AN ENDPOINT OF API/USERS (eventually I could describe this route as "add user" or "register profile" or "...whatever the route does")
// @route:          GET api/users
// @access          Public
router.get(
    '/', (req, res) => { res.send('User Route') }
);

module.exports = router;