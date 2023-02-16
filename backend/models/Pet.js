const mongoose = require('../db/conn')
const { Schema } = mongoose

const Pet = mongoose.model(
  'Pet', new Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    weight: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    available: {
      type: Boolean,
    },
    user: Object, // inserido objeto
    adopter: Object, //adotante
  }, {timestamps: true}),
)

module.exports = Pet

