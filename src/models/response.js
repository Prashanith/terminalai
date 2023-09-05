import { ResponseCodes } from "../constants/codes.js";
import { HttpError } from "./error.js";
class HttpResponse {
  constructor(data, error) {
    this.data = data;
    this.error = error;
  }

  toJSON() {
    return {
      data: this.data,
      error: this.error,
    };
  }

  static toInternalServerError(response, message = null) {
    var error = new HttpError(
      ResponseCodes.AI500,
      message ? message : "Internal Server Error"
    ).toJSON();
    var res = new HttpResponse(null, error).toJSON();
    return response.status(400).json(res);
  }

  static toBadRequestError(response, message = null) {
    var error = new HttpError(
      ResponseCodes.AI400,
      message ? message : "Bad Request Error"
    ).toJSON();
    var res = new HttpResponse(null, error).toJSON();
    return response.status(400).json(res);
  }

  static ok(response, data) {
    var res = new HttpResponse(data, null).toJSON();
    return response.status(200).json(res);
  }

  static toUnauthorizedError(response,message = null) {
    var error = new HttpError(
      ResponseCodes.AI401,
      message ? message : "Authorization Error Occurred"
    ).toJSON();
    var res = new HttpResponse(null, error).toJSON();
    return response.status(401).json(res);
  }
}

export { HttpResponse };