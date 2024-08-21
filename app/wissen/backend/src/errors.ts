export class InvalidEmailOrPasswrd extends Error {
  constructor() {
    super("Invalid e-mail or password!");
  }
}