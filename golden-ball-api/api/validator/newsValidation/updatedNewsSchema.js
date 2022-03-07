import Joi from "joi";

const updatedNewsSchema = Joi.object({
  _id: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
});

export default updatedNewsSchema;