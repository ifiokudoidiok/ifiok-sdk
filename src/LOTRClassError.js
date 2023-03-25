export default class LOTRClassError extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
      this.name = "LOTRClassError";
    }
  }

  