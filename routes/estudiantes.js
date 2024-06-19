const express = require('express');
const router = express.Router();

const estudiantesController = require('../controllers/estudiantesController');
router.get('/', estudiantesController.list);
router.post('/', estudiantesController.save);
router.delete('/:idempresa', estudiantesController.delete);
router.get('/:idempresa', estudiantesController.edit);
router.post('/:idempresa', estudiantesController.update);

module.exports = router;
