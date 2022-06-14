const express = require('express');
const router = express.Router();
const routerNote = require('./note.routes');
const routerColor = require('./colors.routes');

router.use('/colors', routerColor);
router.use('/', routerNote);



module.exports = router;