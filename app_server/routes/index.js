var express = require('express');
var router = express.Router();
var ctrlWelcome = require('../controllers/welcome');
var ctrlVendor = require('../controllers/vendors');
var ctrlPackage = require('../controllers/packages');

/* GET home page. */
router.get('/', ctrlWelcome.index);

/* Vendors */
router.get('/vendor', ctrlVendor.dashboard);

/* Packges */
router.get('/package/new', ctrlPackage.new);
router.get('/package/display', ctrlPackage.display);
router.get('/track', ctrlPackage.trackPackage);


module.exports = router;
