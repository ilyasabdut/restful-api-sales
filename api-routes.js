
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

var countryController = require('./countryController');

router.route('/sales')
    .get(countryController.index)

router.route('/sales/:sales_id')
    .get(countryController.view)

module.exports = router;
