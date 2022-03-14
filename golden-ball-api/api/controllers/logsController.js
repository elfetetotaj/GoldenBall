import logModel from "../models/logsModel";

export default {
  get: async (req, res) => {
    console.log(await logModel.find());
    return res.json(await logModel.find());
  },
  post: async (req, res) => {
    const log = new logModel(req.body);

    await log.save();

    return res.json(log);
  },
};
