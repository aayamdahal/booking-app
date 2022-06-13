const User = require('../model/User');

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json('User has been deleted');
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const getAllUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getAllUserById,
  getAllUser,
};
