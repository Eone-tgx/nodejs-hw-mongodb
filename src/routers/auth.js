import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetPasswordEmailSchema,
  requestResetPasswordSchema,
} from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetPasswordController,
  requestResetPasswordEmailController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/auth/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/auth/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/auth/refresh', ctrlWrapper(refreshUserSessionController));

router.post('/auth/logout', ctrlWrapper(logoutUserController));

router.post(
  '/auth/send-reset-email',
  validateBody(requestResetPasswordEmailSchema),
  ctrlWrapper(requestResetPasswordEmailController),
);

router.post(
  '/auth/reset-password',
  validateBody(requestResetPasswordSchema),
  ctrlWrapper(requestResetPasswordController),
);

export default router;
