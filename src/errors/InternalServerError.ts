class InternalServerError extends Error {
  status: number;
  constructor() {
    super("Internal Server Error.");
    this.status = 500;
    this.message = "Internal Server Error.";
  }
}

export default InternalServerError;
