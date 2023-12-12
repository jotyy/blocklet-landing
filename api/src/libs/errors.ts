/* eslint-disable max-classes-per-file */
export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends AppError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(resource: string) {
    super(`You don't have permission to access ${resource}`, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(resource: string) {
    super(`You don't have permission to access ${resource}`, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404);
  }
}

export class UserAlreadyExistsError extends AppError {
  constructor() {
    super('User already exists', 400);
  }
}

export class PasswordNotMatchError extends AppError {
  constructor() {
    super('Password is incorrect', 400);
  }
}
