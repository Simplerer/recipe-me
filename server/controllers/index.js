const router = require('express').Router();
const axiosRoutes = require('./axios');
const apiRoutes = require('./users');

router.use('/api', axiosRoutes);
router.use('/api', apiRoutes);



module.exports = router;