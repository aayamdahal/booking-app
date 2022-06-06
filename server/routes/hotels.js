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
const router = express.Router();
// CREATE
router.post('/', createHotel);
// UPDATE
router.put('/:id', updateHotel);
// DELETE
router.delete('/:id', deleteHotel);
// GET BY ID
router.get('/:id', getAllHotelById);

// GET ALL
router.get('/', getAllHotel);

module.exports = router;
