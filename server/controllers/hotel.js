const Hotel = require('../model/Hotel');

const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
    next(err);
  }
};

const updateHotel = async (req, res, next) => {
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
};

const deleteHotel = async (req, res, next) => {
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
};

const getAllHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const getAllHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotelById,
  getAllHotel,
};
