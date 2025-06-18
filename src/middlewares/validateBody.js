import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log(error);
    throw createHttpError(400, error.details.map((e) => e.message).join(', '));
  }
};
