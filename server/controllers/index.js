const router = require('express').Router();
const axiosRoutes = require('./axios');
const apiRoutes = require('./api');

router.use('/axios', axiosRoutes);
router.use('/api', apiRoutes);



module.exports = router;