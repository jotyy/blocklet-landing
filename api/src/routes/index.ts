import { Request, Router } from 'express';
import { ZodError } from 'zod';

import { LoginDTO, RegisterDTO, UpdateUserDTO, loginValidator, registerValidator, updateUserValidator } from '../data';
import { AppError } from '../libs/errors';
import { decodeToken } from '../libs/jwt';
import userService from '../services/user-service';

const getToken = (req: Request) => {
  let token = '';
  if (req.headers.authorization) {
    // get bearer token
    token = req.headers.authorization.replace('Bearer ', '');
  }

  return token;
};

const router = Router();

router.post('/register', async (req, res) => {
  const params = req.body as RegisterDTO;

  try {
    registerValidator.parse(params);

    const user = await userService.register(params);
    return res.json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    if (error instanceof AppError) {
      return res.status(error.statusCode).json(error);
    }
    return res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const params = req.body as LoginDTO;

  try {
    loginValidator.parse(params);

    const user = await userService.login(params);
    return res.json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    if (error instanceof AppError) {
      return res.status(error.statusCode).json(error);
    }
    return res.status(500).json(error);
  }
});

router.put('/users', async (req, res) => {
  const params = req.body as UpdateUserDTO;

  try {
    updateUserValidator.parse(params);

    const user = await userService.update(params);
    return res.json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    if (error instanceof AppError) {
      return res.status(error.statusCode).json(error);
    }
    return res.status(500).json(error);
  }
});

router.get('/users/me', (req, res) => {
  const token = getToken(req);
  if (token === '') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const user = decodeToken(token);
  return res.json(user);
});

export default router;
