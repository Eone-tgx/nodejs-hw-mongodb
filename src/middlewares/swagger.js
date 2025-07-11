import fs from 'node:fs';
import { SWAGGER_PATH } from '../constants/index.js';
import swaggerUi from 'swagger-ui-express';

export const setupSwagger = () => {
  try {
    const swaggerContent = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString());
    return [...swaggerUi.serve, swaggerUi.setup(swaggerContent)];
  } catch (error) {
    console.error(error);
    return [
      (req, res, next) => next(),
      (req, res) => res.status(500).json({ message: "Can't load swagger" }),
    ];
  }
};
