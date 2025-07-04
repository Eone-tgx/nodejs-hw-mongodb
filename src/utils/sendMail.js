import { createTransport } from 'nodemailer';
import { getEnvVar } from './getEnvVar.js';
import { SMTP } from '../constants/index.js';
import createHttpError from 'http-errors';

const mailClient = createTransport({
  host: getEnvVar(SMTP.SMTP_HOST),
  port: getEnvVar(SMTP.SMTP_PORT),
  secure: true,
  auth: {
    user: getEnvVar(SMTP.SMTP_USER),
    pass: getEnvVar(SMTP.SMTP_PASS),
  },
});

export const sendEmail = async ({ email, html, subject }) => {
  try {
    await mailClient.sendMail({
      to: email,
      subject,
      html,
      from: getEnvVar(SMTP.SMTP_FROM),
    });
  } catch (error) {
    console.error(error);
    throw createHttpError(
      500,
      'Failed to send the email, please try again later.',
    );
  }
};
