const express = require('express');
const router = express.Router();

const controllerNote = require('../controller/controller.note');


router.get('/', controllerNote.note);
router.post('/', controllerNote.noteCreate);
router.put('/:id', controllerNote.noteUpdate);
router.delete('/:id', controllerNote.noteDelete);

module.exports = router;