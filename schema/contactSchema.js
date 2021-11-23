/* eslint-disable semi */
/* eslint-disable quotes */
const { Schema, model, SchemaTypes } = require("mongoose");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Type contact name"]
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      required: true
    },
    favorite: {
      type: Boolean,
      default: false
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user"
    }
  },
  {
    versionKey: false,
    timestamp: true
  }
);

const Contact = model("contact", contactSchema);

module.exports = Contact;
