class UsernameAlredyInUse extends Error {
  status: number;
  constructor() {
    super("The username is already in use.");
    this.message = "The username is already in use.";
    this.status = 400;
    this.name = "UsernameAlredyInUse";
    Error.captureStackTrace(this, this.constructor);
  }
}

export default UsernameAlredyInUse;
