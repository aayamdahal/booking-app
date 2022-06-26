const express = require('express');
const { createRoom } = require('../controllers/room');

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createRoom);
// UPDATE
router.put('/:id', verifyAdmin, updateRoom);
// DELETE
router.delete('/:id', verifyAdmin, deleteRoom);
// GET BY ID
router.get('/:id', getAllRoomById);

// GET ALL
router.get('/', getAllRoom);

module.exports = router;
