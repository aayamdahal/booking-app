const express = require('express');
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotel,
  getAllHotelById,
} = require('../controllers/hotel');
const Hotel = require('../model/Hotel');
const { createError } = require('../utils/errors');
const { verifyAdmin } = require('../utils/verifyToken');
const router = express.Router();
// CREATE
router.post('/', verifyAdmin, createHotel);
// UPDATE
router.put('/:id', verifyAdmin, updateHotel);
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel);
// GET BY ID
router.get('/:id', getAllHotelById);

// GET ALL
router.get('/', getAllHotel);

module.exports = router;
