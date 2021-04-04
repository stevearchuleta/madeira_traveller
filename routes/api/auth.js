const express = require('express');
const router = express.Router();

// @description:    TEST ROUTE: THIS IS A GET TYPE WITH AN ENDPOINT OF API/AUTH (eventually I could describe this route as "authenticate user" or "authenticate profile" or "...whatever the route does")
// @route:          GET api/auth
// @access          Public
router.get(
    '/', (req, res) => { res.send('Auth Route') }
);

module.exports = router;