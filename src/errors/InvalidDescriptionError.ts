import { ERROR_NAMES } from "@/consts";

class InvalidDescriptionError extends Error {
  constructor(message: string) {
    super(message);
    this.message = ERROR_NAMES.INVALID_DESCRIPTION;
  }
}

export default InvalidDescriptionError;
