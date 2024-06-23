class UserNotFoundError extends Error {
  status: number;
  constructor() {
    super("User not found");
    this.status = 401;
  }
}

export default UserNotFoundError;
