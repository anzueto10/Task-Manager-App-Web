import { ERROR_NAMES } from "@/consts";

class ResponseError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = ERROR_NAMES.RESPONSE_ERROR;
    this.message = message;
    this.status = status;
  }
}

export default ResponseError;
