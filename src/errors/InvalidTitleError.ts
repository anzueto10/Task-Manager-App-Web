import { ERROR_NAMES } from "@/consts";

class InvalidTitleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ERROR_NAMES.INVALID_TITLE;
  }
}

export default InvalidTitleError;
