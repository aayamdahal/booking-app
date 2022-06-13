const express = require('express');
const {
  updateUser,
  deleteUser,
  getAllUserById,
  getAllUser,
} = require('../controllers/user');

const router = express.Router();
const { verifyToken, verifyUser } = require('../utils/verifyToken');

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  return res.send('You are authenticated welcome.');
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  return res.send('You are authenticated to delete your account.');
});

// UPDATE
router.put('/:id', updateUser);
// DELETE
router.delete('/:id', deleteUser);
// GET BY ID
router.get('/:id', getAllUserById);

// GET ALL
router.get('/', getAllUser);

module.exports = router;
