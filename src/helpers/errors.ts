import { Response } from "express";

export interface SystemError {
  status: number,
  message: string,
  url: string,
  error: any
}

export function handleError(res: Response, error: any): SystemError {
  const mapped_errors = [400, 401, 402, 403, 404];
  let status = 500;

  if (mapped_errors.includes(error.code)) {
    status = +error.code
  }

  let message = "Houve um erro desconhecido ao processar a solicitação";

  if (error.message) {
    message = error.message;
  } else if (error.description) {
    message = error.description;
  }

  const _error: SystemError = {
    status,
    message,
    url: res.req.baseUrl,
    error
  }

  console.error(JSON.stringify(_error));
  return _error
}