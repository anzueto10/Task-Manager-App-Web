class PasswordsDoNotMatchesError extends Error {
  status: number;
  constructor() {
    super("The password or user are invalid.");
    this.status = 401;
  }
}

export default PasswordsDoNotMatchesError;
