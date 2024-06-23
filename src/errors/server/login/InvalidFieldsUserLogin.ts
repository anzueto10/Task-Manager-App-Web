class InvalidFieldsUserLogin extends Error {
  status: number;

  constructor() {
    super("The fields can't be null");
    this.status = 400;
    this.message = "The fields can't be null";
    this.name = "InvalidFieldsUserLogin";
    Error.captureStackTrace(this, this.constructor);
  }
}

export default InvalidFieldsUserLogin;
