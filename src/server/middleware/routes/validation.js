import Joi from "joi";
import _ from "lodash";

const generateValidator = toValidate => (genericSchema, appSpecificSchemas) => (
  req,
  res,
  next
) => {
  const schema = _.get(appSpecificSchemas, req.appId)
    ? appSpecificSchemas[req.appId]
    : genericSchema;

  const result = Joi.validate(toValidate(req), schema);

  // sends this request straight to handleErrors.js
  if (result.error) return next(new Error());

  next();
};

export const hasBody = generateValidator(req => req.body);
export const hasParams = generateValidator(req => req.params);
export const hasQuery = generateValidator(req => req.query);
