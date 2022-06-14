import Room from '../model/Rooms';
import Hotel from '../model/Hotel';
import { createError } from '../utils/error';

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save;
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json('Room has been deleted');
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const getAllRoomById = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const getAllRoom = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = {
  getAllRoomById,
  getAllRoom,
  updateRoom,
  deleteRoom,
  createRoom,
};
