const mongoose = require('mongoose');
const Room = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavaiableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Room', RoomSchema);
