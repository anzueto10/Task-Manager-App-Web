class EmailAlredyInUseError extends Error {
  status: number;
  constructor() {
    super("The email already has an associated account.");
    this.message = "The email already has an associated account.";
    this.status = 400;
    this.name = "EmailAlredyInUseError";
  }
}

export default EmailAlredyInUseError;
