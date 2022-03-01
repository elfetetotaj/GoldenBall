import Joi from "joi";

const updatedPlayerSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  position: Joi.string().required(),
  goals: Joi.number(),
  price: Joi.number(),
});

export default updatedPlayerSchema;