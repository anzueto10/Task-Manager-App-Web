class EmailAlredyInUseError extends Error {
  status: number;
  constructor() {
    super("The email already has an associated account.");
    this.message = "The email already has an associated account.";
    this.status = 400;
    this.name = "EmailAlredyInUseError";
    Error.captureStackTrace(this, this.constructor);
  }
}

export default EmailAlredyInUseError;
