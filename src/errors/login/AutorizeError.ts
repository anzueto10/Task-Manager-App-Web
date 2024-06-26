class AutorizeError extends Error {
  status: number;
  constructor({ message, status }: { message: string; status: number }) {
    super(message);
    this.message = message;
    this.status = status;
  }
}
