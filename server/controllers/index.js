const router = require('express').Router();
const axiosRoutes = require('./axios');
const apiRoutes = require('./users');
const sessionroutes = require('./session');

router.use('/api', axiosRoutes);
router.use('/api', apiRoutes);
router.use('/api', sessionroutes);



module.exports = router;