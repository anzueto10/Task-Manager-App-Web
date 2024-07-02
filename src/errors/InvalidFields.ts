class InvalidFields extends Error {
  status: number;
  constructor() {
    super("The fields can't be null");
    this.status = 400;
    this.message = "InvalidFields";
  }
}

export default InvalidFields;
