class HttpError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
  toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

export { HttpError };
