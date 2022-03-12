import contactModel from "../models/contactModel";

export default {
  get: async (req, res) => {
    return res.json(await contactModel.find());
  },
  post: async (req, res) => {
    const contact = new contactModel(req.body);

    await contact.save();

    return res.json(contact);
  },
};
