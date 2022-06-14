const express = require('express');
const {
  updateUser,
  deleteUser,
  getAllUserById,
  getAllUser,
} = require('../controllers/user');

const router = express.Router();
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require('../utils/verifyToken');

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  return res.send('You are authenticated welcome.');
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  return res.send('You are authenticated to delete your account.');
});

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
  return res.send('Hello Admin, You are authenticated to delete your account.');
});

// UPDATE
router.put('/:id', verifyUser, updateUser);
// DELETE
router.delete('/:id', verifyUser, deleteUser);
// GET BY ID
router.get('/:id', verifyUser, getAllUserById);
// GET ALL
router.get('/', verifyAdmin, getAllUser);

module.exports = router;
