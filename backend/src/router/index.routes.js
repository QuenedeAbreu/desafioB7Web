const express = require('express');
const router = express.Router();
const routerNote = require('./note.routes');
const routerColor = require('./colors.routes');

router.use('/', routerNote);

router.use('/colors', routerColor);


module.exports = router;