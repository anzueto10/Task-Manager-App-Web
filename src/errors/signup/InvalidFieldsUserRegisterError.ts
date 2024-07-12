class InvalidFieldsUserRegisterError extends Error {
  status: number;

  constructor() {
    super("The fields can't be null.");
    this.status = 400;
    this.message = "The fields can't be null.";
    this.name = "InvalidFieldsUserRegisterError";
  }
}

export default InvalidFieldsUserRegisterError;
