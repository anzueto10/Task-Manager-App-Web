class PasswordsDoNotMatchesError extends Error {
  status: number;
  constructor() {
    super("The password is incorrect");
    this.status = 401;
  }
}

export default PasswordsDoNotMatchesError;
