/* eslint-disable quotes */
/* eslint-disable semi */

const { Contact } = require("../../schema");

const listContacts = async owner => {
  try {
    const data = await Contact.find({ owner });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (contactId, owner) => {
  try {
    const data = await Contact.findOne({ _id: contactId, owner });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (contactId, owner) => {
  try {
    const data = await Contact.findOneAndRemove({ _id: contactId, owner });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async body => {
  try {
    const data = await Contact.create(body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const updateContact = async (contactId, owner) => {
  try {
    const data = await Contact.findOneAndUpdate({ _id: contactId, owner, new: true });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const updateStatusContact = async (contactId, body, owner) => {
  try {
    const { favorite } = body;
    const data = await Contact.findOneAndUpdate({ _id: contactId, favorite, new: true, owner });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact
};
