import { type HttpResponse } from "../../@types/http";
import { ServerError } from "../errors/server.error";

export const serverError = (): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError(),
  };
};

export const ok = (data: unknown): HttpResponse => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const noContent = (): HttpResponse => {
  return {
    statusCode: 204,
    body: "No content",
  };
};

export const exceptionError = (data: string): HttpResponse => {
  return {
    statusCode: 422,
    body: {
      message: data,
    },
  };
};
