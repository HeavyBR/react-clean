export class UnexpectedError extends Error {
  constructor () {
    super('Something has gone wrong')
    this.name = 'UnexpectedError'
  }
}
