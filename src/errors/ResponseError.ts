import { ERROR_NAMES } from "@/consts";

class ResponseError extends Error {
  response: Response;

  constructor(response: Response, message?: string) {
    super(message || response.statusText);
    this.name = ERROR_NAMES.RESPONSE_ERROR;
    this.response = response;
  }
}

export default ResponseError;
