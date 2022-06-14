const express = require('express');
const router = express.Router();

const controllerColors = require('../controller/controller.color');


router.get('/', controllerColors.color);
router.get('/:id', controllerColors.colorById);
router.post('/', controllerColors.colorCreate);
router.put('/:id', controllerColors.colorUpdate);
router.delete('/:id', controllerColors.colorDelete);

module.exports = router;