const express = require('express');
const createHotel = require('../controllers/hotel');
const Hotel = require('../model/Hotel');
const { createError } = require('../utils/errors');
const router = express.Router();
// CREATE
router.post('/', createHotel);
// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json('hotel has been deleted');
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
// GET
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// GET ALL

router.get('/', async (req, res) => {
  // const failed = true;
  // if (failed) return next(createError(401, 'You are not authorized'));
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
