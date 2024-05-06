const express = require('express');
const router = express.Router();
const knightsController = require('./controllers/knightsController');  // Assuming knightsController exports an instance

router.get('/knights', knightsController.getKnights);
router.post('/knights', knightsController.createKnight);
router.get('/knights/:id', knightsController.getKnight);
router.delete('/knights/:id', knightsController.deleteKnight);
router.patch('/knights/:id', knightsController.updateKnightNickname);

module.exports = router;
