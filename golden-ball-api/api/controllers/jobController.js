import jobModel from "../models/jobModel";

export default {
  get: async (req, res) => {
    return res.json(await jobModel.find());
  },
  post: async (req, res) => {
    const job = new jobModel(req.body);

    await job.save();

    return res.json(job);
  },
};
