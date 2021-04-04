const express = require('express');
const router = express.Router();

// @description:    TEST ROUTE: THIS IS A GET TYPE WITH AN ENDPOINT OF API/PROFILE (eventually I could describe this route as "user profile" or "...whatever the route does")
// @route:          GET api/profile
// @access          Public
router.get(
    '/', (req, res) => { res.send('Profile Route') }
);

module.exports = router;